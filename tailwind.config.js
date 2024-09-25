import tailwindScrollbar from "tailwind-scrollbar";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rgba-header": "#f4f6f973",
        with: "#fff",
      },
      fontFamily: {
        Peta: ["Lexend Peta", "sans-serif"],
      },
      zIndex: {
        100: "1000",
        200: "2000",
      },
      screens: {
        ExtraSmall: "450px",
        "mobile-md": "840px",
        tablet: "940px",
        Large: "1090px",
        ExtraLarge: "1200px",
        xll: "1279px",
        "2ExtraLarge": "1450px",
        "3xl": "1630px",
        "4xl": "1780px",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
