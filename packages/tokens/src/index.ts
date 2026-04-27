export type C7ThemeMode = "light" | "dark";

export type C7CssVars = Readonly<{
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;
  primary: string;
  primaryForeground: string;
  primaryLight95: string;
  primaryLight90: string;
  primaryLight75: string;
  primaryLight60: string;
  primaryDark25: string;
  primaryDark10: string;
  secondary: string;
  secondaryForeground: string;
  secondaryLight95: string;
  secondaryLight90: string;
  secondaryLight75: string;
  secondaryLight60: string;
  secondaryDark25: string;
  secondaryDark10: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  error: string;
  errorForeground: string;
  errorLight90: string;
  errorLight75: string;
  warning: string;
  warningForeground: string;
  warningLight90: string;
  warningStrong: string;
  success: string;
  successForeground: string;
  successLight90: string;
  alternative: string;
  alternativeForeground: string;
  alternativeLight60: string;
  alternativeLight75: string;
  alternativeLight90: string;
  radius: string;
  radiusCard: string;
  radiusSheet: string;
  sidebarBackground: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}>;

export const c7CssVars: Readonly<Record<C7ThemeMode, C7CssVars>> = {
  light: {
    background: "0 0% 98%",
    foreground: "0 0% 20%",
    card: "0 0% 100%",
    cardForeground: "0 0% 20%",
    popover: "0 0% 100%",
    popoverForeground: "0 0% 20%",
    muted: "0 0% 96%",
    mutedForeground: "0 1% 44%",
    border: "0 0% 88%",
    input: "0 1% 59%",
    ring: "200 100% 30%",
    primary: "200 100% 30%",
    primaryForeground: "0 0% 100%",
    primaryLight95: "200 86% 95%",
    primaryLight90: "200 86% 90%",
    primaryLight75: "203 84% 86%",
    primaryLight60: "201 78% 67%",
    primaryDark25: "200 100% 23%",
    primaryDark10: "200 100% 15%",
    secondary: "49 100% 50%",
    secondaryForeground: "0 0% 20%",
    secondaryLight95: "49 100% 95%",
    secondaryLight90: "49 100% 90%",
    secondaryLight75: "49 100% 80%",
    secondaryLight60: "49 95% 65%",
    secondaryDark25: "49 100% 38%",
    secondaryDark10: "49 100% 25%",
    accent: "49 100% 50%",
    accentForeground: "0 0% 20%",
    destructive: "354 82% 60%",
    destructiveForeground: "0 0% 100%",
    error: "354 82% 60%",
    errorForeground: "0 0% 100%",
    errorLight90: "354 82% 92%",
    errorLight75: "354 70% 80%",
    warning: "47 95% 75%",
    warningForeground: "0 0% 20%",
    warningLight90: "47 100% 92%",
    warningStrong: "49 100% 50%",
    success: "142 71% 38%",
    successForeground: "0 0% 100%",
    successLight90: "142 70% 90%",
    alternative: "0 1% 44%",
    alternativeForeground: "0 0% 100%",
    alternativeLight60: "0 1% 59%",
    alternativeLight75: "0 1% 75%",
    alternativeLight90: "0 0% 87%",
    radius: "0.25rem",
    radiusCard: "0.5rem",
    radiusSheet: "1rem",
    sidebarBackground: "0 0% 98%",
    sidebarForeground: "0 0% 20%",
    sidebarPrimary: "200 100% 30%",
    sidebarPrimaryForeground: "0 0% 100%",
    sidebarAccent: "0 0% 96%",
    sidebarAccentForeground: "0 0% 20%",
    sidebarBorder: "0 0% 88%",
    sidebarRing: "200 100% 30%"
  },
  dark: {
    background: "200 50% 8%",
    foreground: "0 0% 98%",
    card: "200 40% 12%",
    cardForeground: "0 0% 98%",
    popover: "200 40% 12%",
    popoverForeground: "0 0% 98%",
    muted: "200 30% 16%",
    mutedForeground: "0 0% 70%",
    border: "200 30% 20%",
    input: "200 30% 20%",
    ring: "49 100% 50%",
    primary: "49 100% 50%",
    primaryForeground: "200 100% 15%",
    primaryLight95: "49 100% 95%",
    primaryLight90: "49 100% 90%",
    primaryLight75: "49 100% 80%",
    primaryLight60: "49 95% 65%",
    primaryDark25: "49 100% 38%",
    primaryDark10: "49 100% 25%",
    secondary: "200 40% 20%",
    secondaryForeground: "0 0% 98%",
    secondaryLight95: "200 40% 25%",
    secondaryLight90: "200 40% 30%",
    secondaryLight75: "200 40% 35%",
    secondaryLight60: "200 40% 40%",
    secondaryDark25: "200 40% 15%",
    secondaryDark10: "200 40% 10%",
    accent: "49 100% 50%",
    accentForeground: "200 100% 15%",
    destructive: "354 70% 45%",
    destructiveForeground: "0 0% 98%",
    error: "354 70% 45%",
    errorForeground: "0 0% 98%",
    errorLight90: "354 70% 70%",
    errorLight75: "354 70% 60%",
    warning: "47 95% 75%",
    warningForeground: "0 0% 20%",
    warningLight90: "47 100% 92%",
    warningStrong: "49 100% 50%",
    success: "142 71% 38%",
    successForeground: "0 0% 100%",
    successLight90: "142 70% 90%",
    alternative: "0 0% 70%",
    alternativeForeground: "200 100% 15%",
    alternativeLight60: "0 0% 60%",
    alternativeLight75: "0 0% 75%",
    alternativeLight90: "0 0% 87%",
    radius: "0.25rem",
    radiusCard: "0.5rem",
    radiusSheet: "1rem",
    sidebarBackground: "200 40% 10%",
    sidebarForeground: "0 0% 95%",
    sidebarPrimary: "49 100% 50%",
    sidebarPrimaryForeground: "200 100% 15%",
    sidebarAccent: "200 30% 16%",
    sidebarAccentForeground: "0 0% 95%",
    sidebarBorder: "200 30% 20%",
    sidebarRing: "49 100% 50%"
  }
} as const;

export const c7NativeColors = {
  primary: {
    DEFAULT: "#006699",
    900: "#062B3D",
    800: "#0B5175",
    400: "#44B5EE",
    300: "#8AD1F4",
    200: "#D0EDFB",
    100: "#E8F6FD",
    foreground: "#F6F7FE"
  },
  secondary: {
    DEFAULT: "#FFCC00",
    900: "#403406",
    800: "#75600B",
    400: "#edcb45",
    300: "#F5E08C",
    200: "#FAF1CF",
    100: "#FCF8E8",
    foreground: "#1F1B1C"
  },
  success: {
    DEFAULT: "#0DFF11",
    800: "#08770A",
    900: "#033004",
    400: "#88F789",
    300: "#CFFCD0",
    200: "#E7FDE7"
  },
  destructive: {
    DEFAULT: "#ED4553",
    foreground: "#F6F7FE"
  },
  border: {
    DEFAULT: "#BFBEBE"
  },
  warning: {
    DEFAULT: "#FBCD37",
    200: "#FEF9E6",
    300: "#FEF2CD",
    400: "#FCE082",
    800: "#7D6003",
    900: "#322601"
  },
  alternative: {
    DEFAULT: "#706F6F",
    200: "#E5E3E3",
    300: "#BFBEBE",
    400: "#999797",
    800: "#333333",
    900: "#1A1919"
  },
  background: "#F6F7FE",
  foreground: "#1F1B1C"
} as const;
