# @chavesete/tailwind-preset

Presets Tailwind do Design System da Chave7.

- `c7WebPreset`: para Next.js e Vite (shadcn)
- `c7NativePreset`: para Expo com NativeWind

## Instalação

```bash
npm i @chavesete/tailwind-preset @chavesete/tokens
```

## Web

```ts
import { c7WebPreset } from "@chavesete/tailwind-preset";

export default {
  presets: [c7WebPreset],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"]
};
```

E no CSS global:

```css
@import "@chavesete/tokens/styles.css";
```

## Native (Expo)

```js
const { c7NativePreset } = require("@chavesete/tailwind-preset");

module.exports = {
  presets: [require("nativewind/preset"), c7NativePreset],
  content: ["./src/**/*.tsx"]
};
```
