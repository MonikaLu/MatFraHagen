/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffffe",
        headline: "#272343",
        paragraph: "#2d334a",
        button: "#ffd803",
        buttonText: "#272343",
      },
      illustration: {
        stroke: "#272343",
        main: "#fffffe",
        highlight: "#ffd803",
        secondary: "#e3f6f5",
        tertiary: "#bae8e8",
      },
      fontSize: {
        title1: "2rem",
      },
    },
  },
  plugins: [],
};
