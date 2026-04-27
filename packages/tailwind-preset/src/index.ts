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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "light-95": "hsl(var(--primary-light-95))",
          "light-90": "hsl(var(--primary-light-90))",
          "light-75": "hsl(var(--primary-light-75))",
          "light-60": "hsl(var(--primary-light-60))",
          "dark-25": "hsl(var(--primary-dark-25))",
          "dark-10": "hsl(var(--primary-dark-10))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          "light-95": "hsl(var(--secondary-light-95))",
          "light-90": "hsl(var(--secondary-light-90))",
          "light-75": "hsl(var(--secondary-light-75))",
          "light-60": "hsl(var(--secondary-light-60))",
          "dark-25": "hsl(var(--secondary-dark-25))",
          "dark-10": "hsl(var(--secondary-dark-10))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
          "light-90": "hsl(var(--error-light-90))",
          "light-75": "hsl(var(--error-light-75))"
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          "light-90": "hsl(var(--success-light-90))"
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          "light-90": "hsl(var(--warning-light-90))",
          strong: "hsl(var(--warning-strong))"
        },
        alternative: {
          DEFAULT: "hsl(var(--alternative))",
          foreground: "hsl(var(--alternative-foreground))",
          "light-60": "hsl(var(--alternative-light-60))",
          "light-75": "hsl(var(--alternative-light-75))",
          "light-90": "hsl(var(--alternative-light-90))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "var(--radius-card)",
        sheet: "var(--radius-sheet)"
      },
      fontSize: {
        small: ["10px", { lineHeight: "1.4" }],
        subtitle: ["12px", { lineHeight: "1.4" }],
        body: ["14px", { lineHeight: "1.5" }],
        "body-lg": ["16px", { lineHeight: "1.5" }],
        title: ["18px", { lineHeight: "1.3", fontWeight: "700" }]
      },
      fontFamily: {
        sans: ["Metropolis", "Inter", "system-ui", "sans-serif"],
        display: ["Metropolis", "Inter", "system-ui", "sans-serif"],
        body: ["Metropolis", "Inter", "system-ui", "sans-serif"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out"
      }
    }
  }
} as const;

export const c7NativePreset = {
  theme: {
    extend: {
      colors: {
        primary: c7NativeColors.primary,
        secondary: c7NativeColors.secondary,
        success: c7NativeColors.success,
        destructive: c7NativeColors.destructive,
        border: c7NativeColors.border,
        warning: c7NativeColors.warning,
        alternative: c7NativeColors.alternative,
        background: c7NativeColors.background,
        foreground: c7NativeColors.foreground
      }
    }
  }
} as const;
