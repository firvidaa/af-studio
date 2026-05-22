import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f5f4",
          100: "#e7e5e4",
          200: "#a8a29e",
          300: "#78716c",
          400: "#57534e",
          500: "#3f3f46",
          600: "#27272a",
          700: "#18181b",
          800: "#0f0f10",
          900: "#0a0a0a",
        },
        accent: {
          DEFAULT: "#f5b544",
          50: "#fff8eb",
          100: "#fdebc4",
          200: "#fbd687",
          300: "#f8c059",
          400: "#f5b544",
          500: "#d99423",
          600: "#a86f15",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        prose: "65ch",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
