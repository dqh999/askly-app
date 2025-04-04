import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--scn-background))",
        primary: "hsl(var(--scn-primary))",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
