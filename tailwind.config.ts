import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090d18",
        panel: "#10182a",
        line: "#293651",
        mist: "#a8b5cc",
        accent: "#8ca8ff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
