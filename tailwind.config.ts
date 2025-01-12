import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        white: {
          100: "#fff",
          150: "#f2f2f2",
          200: "#eff2f5",
          300: "#dedfe2",
          400: "#D3E0E6",
        },
        black: {
          100: "#000",
          200: "#0F1629",
          300: "#0B1426",
          400: "#5D667B",
          500: "#768396",
          600: "#3E424A",
        },
        blue: {
          100: "#2870EA",
          200: "#1B4AEF",
          300: "#0052FE",
          400: "#0141CF",
        },
        green: {
          100: "#EBF9F4",
          200: "#14B079",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
