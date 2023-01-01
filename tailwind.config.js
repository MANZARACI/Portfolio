/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "m-2xl": { max: "1535px" },
        "m-xl": { max: "1279px" },
        "m-lg": { max: "1023px" },
        "m-md": { max: "767px" },
        "m-sm": { max: "639px" },
      },
      colors: {
        mainColor: "#212121",
        secondaryColor: "#535353",
        darkColor: "#121212",
      },
      fontFamily: {
        Kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
