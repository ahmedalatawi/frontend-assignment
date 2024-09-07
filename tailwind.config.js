/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FCC85D",
        secondary: "#A1A1A1",
        dark: "#191919",
        borderColor: "#363636",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
