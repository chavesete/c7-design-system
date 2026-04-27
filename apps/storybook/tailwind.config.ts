import { c7WebPreset } from "@chavesete/tailwind-preset";
import type { Config } from "tailwindcss";

export default {
  presets: [c7WebPreset as any],
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  plugins: []
} satisfies Config;
