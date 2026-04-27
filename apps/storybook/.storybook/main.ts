import path from "node:path";
import { fileURLToPath } from "node:url";
import { mergeConfig, type UserConfig } from "vite";

import type { StorybookConfig } from "@storybook/react-vite";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/docs/**/*.mdx", "../src/stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-mcp"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(baseConfig: UserConfig) {
    const rootDir = path.resolve(dirname, "..");
    const monorepoRoot = path.resolve(rootDir, "../..");

    return mergeConfig(baseConfig, {
      resolve: {
        alias: [
          {
            find: "@chavesete/tokens/styles.css",
            replacement: path.resolve(monorepoRoot, "packages/tokens/src/styles.css")
          },
          {
            find: "@chavesete/tokens",
            replacement: path.resolve(monorepoRoot, "packages/tokens/src")
          },
          {
            find: "@chavesete/tailwind-preset",
            replacement: path.resolve(monorepoRoot, "packages/tailwind-preset/src")
          },
          {
            find: "@chavesete/ui",
            replacement: path.resolve(monorepoRoot, "packages/ui/src")
          },
          {
            find: "@chavesete/ui-native",
            replacement: path.resolve(monorepoRoot, "packages/ui-native/src")
          }
        ]
      },
      server: {
        fs: {
          allow: [rootDir, monorepoRoot]
        }
      }
    } satisfies UserConfig);
  }
};

export default config;
