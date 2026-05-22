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
        // Base oscura con tinte verde (AMR24)
        ink: {
          50: "#F0F5F1",
          100: "#D6DEDA",
          200: "#A1B0AB",
          300: "#6F8B83",
          400: "#4A6862",
          500: "#2E4540",
          600: "#1A302C",
          700: "#11221F",
          800: "#002A22",
          900: "#001A15",
          950: "#000F0C",
        },
        // Racing green — color de marca (decoración, etiquetas, focos sutiles)
        accent: {
          DEFAULT: "#00665E",
          50: "#E6F2F0",
          100: "#B8DDD7",
          200: "#7AC0B6",
          300: "#3E9F92",
          400: "#1A8576",
          500: "#00665E",
          600: "#004F48",
          700: "#003832",
        },
        // Lime eléctrico — CTAs y señales activas
        lime: {
          DEFAULT: "#D4F542",
          300: "#E8FA8C",
          400: "#E3FA6F",
          500: "#D4F542",
          600: "#A8C72F",
          700: "#7E991F",
        },
        highlight: "#00A88A",
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
