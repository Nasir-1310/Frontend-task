import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"], // Default font
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3B82F6", // Tailwind blue-500
        secondary: "#0B9545", // Custom green
        accent: "#F97316", // Orange accent
        card: "rgba(255, 255, 255, 0.95)",
      },

      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.1)",
        glow: "0 0 12px rgba(59, 130, 246, 0.5)",
      },

      backdropBlur: {
        xs: "2px",
        sm: "3px",
        md: "6px",
      },

      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
      },

      screens: {
        xs: "480px", // extra small mobile
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // for rich text styling (optional)
  ],
};

export default config;
