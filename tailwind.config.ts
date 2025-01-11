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
          200: "#eff2f5",
          300: "#dedfe2",
        },
        black: {
          100: "#000",
          200: "#0F1629",
          300: "#0B1426",
          400: "#5D667B",
          500: "#768396",
        },
        blue: {
          100: "#2870EA",
          200: "#1B4AEF",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
