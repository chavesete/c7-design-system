import { c7WebPreset } from "@chavesete/tailwind-preset";

export default {
  presets: [c7WebPreset as any],
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  plugins: []
};
