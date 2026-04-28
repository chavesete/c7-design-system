import { c7NativeColors } from "@chavesete/tokens";

export const c7WebPreset = {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        "c7-border": "hsl(var(--c7-border))",
        "c7-input": "hsl(var(--c7-input))",
        "c7-ring": "hsl(var(--c7-ring))",
        "c7-background": "hsl(var(--c7-background))",
        "c7-foreground": "hsl(var(--c7-foreground))",
        "c7-primary": {
          DEFAULT: "hsl(var(--c7-primary))",
          foreground: "hsl(var(--c7-primary-foreground))",
          "light-95": "hsl(var(--c7-primary-light-95))",
          "light-90": "hsl(var(--c7-primary-light-90))",
          "light-75": "hsl(var(--c7-primary-light-75))",
          "light-60": "hsl(var(--c7-primary-light-60))",
          "dark-25": "hsl(var(--c7-primary-dark-25))",
          "dark-10": "hsl(var(--c7-primary-dark-10))"
        },
        "c7-secondary": {
          DEFAULT: "hsl(var(--c7-secondary))",
          foreground: "hsl(var(--c7-secondary-foreground))",
          "light-95": "hsl(var(--c7-secondary-light-95))",
          "light-90": "hsl(var(--c7-secondary-light-90))",
          "light-75": "hsl(var(--c7-secondary-light-75))",
          "light-60": "hsl(var(--c7-secondary-light-60))",
          "dark-25": "hsl(var(--c7-secondary-dark-25))",
          "dark-10": "hsl(var(--c7-secondary-dark-10))"
        },
        "c7-destructive": {
          DEFAULT: "hsl(var(--c7-destructive))",
          foreground: "hsl(var(--c7-destructive-foreground))"
        },
        "c7-error": {
          DEFAULT: "hsl(var(--c7-error))",
          foreground: "hsl(var(--c7-error-foreground))",
          "light-90": "hsl(var(--c7-error-light-90))",
          "light-75": "hsl(var(--c7-error-light-75))"
        },
        "c7-success": {
          DEFAULT: "hsl(var(--c7-success))",
          foreground: "hsl(var(--c7-success-foreground))",
          "light-90": "hsl(var(--c7-success-light-90))"
        },
        "c7-warning": {
          DEFAULT: "hsl(var(--c7-warning))",
          foreground: "hsl(var(--c7-warning-foreground))",
          "light-90": "hsl(var(--c7-warning-light-90))",
          strong: "hsl(var(--c7-warning-strong))"
        },
        "c7-alternative": {
          DEFAULT: "hsl(var(--c7-alternative))",
          foreground: "hsl(var(--c7-alternative-foreground))",
          "light-60": "hsl(var(--c7-alternative-light-60))",
          "light-75": "hsl(var(--c7-alternative-light-75))",
          "light-90": "hsl(var(--c7-alternative-light-90))"
        },
        "c7-muted": {
          DEFAULT: "hsl(var(--c7-muted))",
          foreground: "hsl(var(--c7-muted-foreground))"
        },
        "c7-accent": {
          DEFAULT: "hsl(var(--c7-accent))",
          foreground: "hsl(var(--c7-accent-foreground))"
        },
        "c7-popover": {
          DEFAULT: "hsl(var(--c7-popover))",
          foreground: "hsl(var(--c7-popover-foreground))"
        },
        "c7-card": {
          DEFAULT: "hsl(var(--c7-card))",
          foreground: "hsl(var(--c7-card-foreground))"
        },
        "c7-sidebar": {
          DEFAULT: "hsl(var(--c7-sidebar-background))",
          foreground: "hsl(var(--c7-sidebar-foreground))",
          primary: "hsl(var(--c7-sidebar-primary))",
          "primary-foreground": "hsl(var(--c7-sidebar-primary-foreground))",
          accent: "hsl(var(--c7-sidebar-accent))",
          "accent-foreground": "hsl(var(--c7-sidebar-accent-foreground))",
          border: "hsl(var(--c7-sidebar-border))",
          ring: "hsl(var(--c7-sidebar-ring))"
        }
      },
      borderRadius: {
        "c7-lg": "var(--c7-radius)",
        "c7-md": "calc(var(--c7-radius) - 2px)",
        "c7-sm": "calc(var(--c7-radius) - 4px)",
        "c7-card": "var(--c7-radius-card)",
        "c7-sheet": "var(--c7-radius-sheet)"
      },
      fontSize: {
        "c7-small": ["10px", { lineHeight: "1.4" }],
        "c7-subtitle": ["12px", { lineHeight: "1.4" }],
        "c7-body": ["14px", { lineHeight: "1.5" }],
        "c7-body-lg": ["16px", { lineHeight: "1.5" }],
        "c7-title": ["18px", { lineHeight: "1.3", fontWeight: "700" }]
      },
      fontFamily: {
        "c7-sans": ["Metropolis", "Inter", "system-ui", "sans-serif"],
        "c7-display": ["Metropolis", "Inter", "system-ui", "sans-serif"],
        "c7-body": ["Metropolis", "Inter", "system-ui", "sans-serif"]
      },
      keyframes: {
        "c7-accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "c7-accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "c7-fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "c7-accordion-down": "c7-accordion-down 0.2s ease-out",
        "c7-accordion-up": "c7-accordion-up 0.2s ease-out",
        "c7-fade-in": "c7-fade-in 0.2s ease-out"
      }
    }
  }
} as const;

export const c7NativePreset = {
  theme: {
    extend: {
      colors: {
        "c7-primary": c7NativeColors.primary,
        "c7-secondary": c7NativeColors.secondary,
        "c7-success": c7NativeColors.success,
        "c7-destructive": c7NativeColors.destructive,
        "c7-border": c7NativeColors.border,
        "c7-warning": c7NativeColors.warning,
        "c7-alternative": c7NativeColors.alternative,
        "c7-background": c7NativeColors.background,
        "c7-foreground": c7NativeColors.foreground
      }
    }
  }
} as const;
