/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        main: "#FFFFFF",
        secondary: "#00011D",
        tertiary: "#499548",
      },
    },
  },
  plugins: [],
};

