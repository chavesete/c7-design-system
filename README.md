# Chave7 Design System

Monorepo dos pacotes do Design System da Chave7 para uso em:

- Sites Next.js
- Apps gerados pelo Lovable (Vite + shadcn)
- Apps iOS/Android com Expo (NativeWind)
- Documentação do DS via Storybook (ui.chave7.com.br)

## Pacotes

- `@chavesete/tokens`: tokens e variáveis CSS do tema
- `@chavesete/tailwind-preset`: presets Tailwind (web e native)
- `@chavesete/ui`: componentes web (React + Tailwind)
- `@chavesete/ui-native`: componentes native (React Native + NativeWind)

## Apps

- `apps/storybook`: Storybook do DS (não é pacote publicado)

## Desenvolvimento

```bash
pnpm install
pnpm build
```

## Storybook (hot reload)

Rodar em modo desenvolvimento:

```bash
pnpm dev:storybook
```

Acessar:

- http://localhost:6006

## Deploy (Easypanel / ui.chave7.com.br)

O deploy usa o [Dockerfile](./Dockerfile) na raiz e serve o build estático do Storybook via nginx.

Build local:

```bash
docker build -t c7-storybook .
```

Rodar local:

```bash
docker run --rm -p 8080:80 c7-storybook
```

## Uso em projetos

Instale os pacotes necessários:

```bash
npm i @chavesete/tokens @chavesete/tailwind-preset
```

Para componentes:

```bash
npm i @chavesete/ui
```

Ou no Expo:

```bash
npm i @chavesete/ui-native
```

## Notas

- Web: importe `@chavesete/tokens/styles.css` no CSS global do app.
- Expo: use `nativewind/preset` e adicione `c7NativePreset` no `tailwind.config`.
