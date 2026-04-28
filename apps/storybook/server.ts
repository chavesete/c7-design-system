import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import http, { type IncomingMessage, type ServerResponse } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createStorybookMcpHandler } from "@storybook/mcp";

function getRequestUrl(req: IncomingMessage): URL {
  const host = req.headers.host ?? "localhost";
  return new URL(req.url ?? "/", `http://${host}`);
}

async function readBody(req: IncomingMessage): Promise<Buffer | undefined> {
  const method = (req.method ?? "GET").toUpperCase();
  if (method === "GET" || method === "HEAD") return undefined;

  const chunks: Uint8Array[] = [];
  for await (const chunk of req) chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  if (chunks.length === 0) return undefined;
  return Buffer.concat(chunks);
}

function toHeaders(nodeHeaders: IncomingMessage["headers"]): Headers {
  const headers = new Headers();
  for (const [key, value] of Object.entries(nodeHeaders)) {
    if (typeof value === "string") headers.set(key, value);
    else if (Array.isArray(value)) headers.set(key, value.join(", "));
  }
  return headers;
}

async function sendResponse(res: ServerResponse, response: Response): Promise<void> {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (response.body == null) {
    res.end();
    return;
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}

function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
    case ".mjs":
      return "text/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".ico":
      return "image/x-icon";
    case ".woff2":
      return "font/woff2";
    case ".woff":
      return "font/woff";
    case ".txt":
      return "text/plain; charset=utf-8";
    case ".map":
      return "application/json; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

async function serveStaticFile(res: ServerResponse, filePath: string, method: string | undefined): Promise<void> {
  try {
    const fileStats = await stat(filePath);
    if (!fileStats.isFile()) {
      res.statusCode = 404;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Not found");
      return;
    }

    res.statusCode = 200;
    res.setHeader("content-type", getContentType(filePath));
    res.setHeader("content-length", String(fileStats.size));

    const normalizedPath = filePath.replaceAll(path.sep, "/");
    if (
      normalizedPath.includes("/assets/") ||
      normalizedPath.includes("/sb-manager/") ||
      normalizedPath.includes("/sb-addons/") ||
      normalizedPath.includes("/sb-common-assets/")
    ) {
      res.setHeader("cache-control", "public, max-age=31536000, immutable");
    } else {
      res.setHeader("cache-control", "public, max-age=300");
    }

    if ((method ?? "GET").toUpperCase() === "HEAD") {
      res.end();
      return;
    }

    const stream = createReadStream(filePath);
    stream.on("error", () => {
      if (!res.headersSent) res.statusCode = 500;
      res.end();
    });
    stream.pipe(res);
  } catch {
    res.statusCode = 404;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Not found");
  }
}

const dirname = path.dirname(fileURLToPath(import.meta.url));
const staticDir = process.env.STATIC_DIR
  ? path.resolve(process.env.STATIC_DIR)
  : path.resolve(dirname, "storybook-static");
const manifestsDir = process.env.MANIFESTS_DIR
  ? path.resolve(process.env.MANIFESTS_DIR)
  : path.resolve(staticDir, "manifests");

const mcpHandler = await createStorybookMcpHandler({
  manifestProvider: async (_request, manifestPath) => {
    const relativePath = manifestPath.replace(/^\.\//, "");
    const expectedPrefix = "manifests/";
    const fileName =
      relativePath.startsWith(expectedPrefix) ? relativePath.slice(expectedPrefix.length) : relativePath;
    const filePath = path.resolve(manifestsDir, fileName);
    return await readFile(filePath, "utf8");
  }
});

const port = Number(process.env.PORT ?? 6006);
const host = process.env.HOST ?? "0.0.0.0";

const server = http.createServer(async (req, res) => {
  try {
    const url = getRequestUrl(req);
    if (url.pathname === "/mcp") {
      const bodyBuffer = await readBody(req);
      const bodyText = bodyBuffer ? bodyBuffer.toString("utf8") : undefined;
      const request = new Request(url, {
        method: req.method,
        headers: toHeaders(req.headers),
        body: bodyText
      });

      const response = await mcpHandler(request);
      await sendResponse(res, response);
      return;
    }

    const decodedPathname = decodeURIComponent(url.pathname);
    const pathname = decodedPathname === "/" ? "/index.html" : decodedPathname;
    const resolvedPath = path.resolve(staticDir, `.${pathname}`);
    if (!resolvedPath.startsWith(staticDir)) {
      res.statusCode = 403;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Forbidden");
      return;
    }

    await serveStaticFile(res, resolvedPath, req.method);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end(error instanceof Error ? error.message : "Internal server error");
  }
});

server.listen(port, host, () => {
  console.log(`Storybook em http://${host}:${port}`);
  console.log(`MCP em http://${host}:${port}/mcp`);
});
