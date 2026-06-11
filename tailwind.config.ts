import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        quiet: "0 24px 80px -36px rgb(15 23 42 / 0.35)",
        glow: "0 20px 70px -28px rgb(var(--accent) / 0.42)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgb(var(--line) / .14) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / .14) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
