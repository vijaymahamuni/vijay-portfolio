/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        din: ["Open Sans", "sans-serif"], // Fixed the spacing issue
      },
    },
  },
  plugins: [],
};
