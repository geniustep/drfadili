import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50:  "#FDF2F7",
          100: "#FADED0",  // alias fallback
          200: "#F5D6E5",
          300: "#EBB4CB",
          400: "#D990B0",
          500: "#C4729A",
          600: "#AE5882",
          700: "#8E4068",
          800: "#6D2E50",
          900: "#4A1C36",
        },
        blush: {
          50:  "#FBF0F4",
          100: "#F5D6E5",
          200: "#EBBDD0",
          300: "#D99BB7",
          400: "#C47999",
          500: "#B0607E",
          600: "#8E4A64",
        },
        pearl: "#FAFAFA",
        ivory: "#F7F3F5",
        charcoal: "#1A1A2E",
        slate: "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-rose": "linear-gradient(135deg, #FDF2F7 0%, #F5D6E5 50%, #FDF2F7 100%)",
        "gradient-hero": "linear-gradient(160deg, #FFFFFF 0%, #FDF2F7 40%, #F5D6E5 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(196, 114, 154, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(196, 114, 154, 0.45)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "rose-sm": "0 2px 12px rgba(196,114,154,0.12)",
        "rose-md": "0 4px 24px rgba(196,114,154,0.2)",
        "rose-lg": "0 8px 40px rgba(196,114,154,0.28)",
        "rose-xl": "0 16px 60px rgba(196,114,154,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
