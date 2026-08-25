import type { Config } from "tailwindcss";

// NOTE ON COLOR SOURCE:
// These tokens are drawn from the EngliZone logo (navy -> blue -> violet
// gradient) as a faithful placeholder. The brief asks to match
// ahmed-elgohary.com "to the millimeter" — I don't have live web access in
// this environment to pull its computed hex values, so I could not extract
// that palette directly. Everything below is centralized in these tokens
// (and the CSS variables in globals.css) specifically so that once you send
// a screenshot or the real hex codes, updating ~6 values here re-skins the
// entire app — no component code needs to change.
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        navy: {
          DEFAULT: "#0B1533",
          light: "#132056",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2E7CF6 0%, #7C4DFF 100%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
