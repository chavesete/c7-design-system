FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY packages ./packages
COPY apps ./apps

RUN pnpm install --frozen-lockfile --prod=false
RUN pnpm -r --filter @chavesete/tokens --filter @chavesete/tailwind-preset --filter @chavesete/ui build

EXPOSE 6006

CMD ["pnpm", "--filter", "@chavesete/storybook", "dev:docker"]
