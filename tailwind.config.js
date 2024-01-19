/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:["Monteserrat", "sans-serif"]
      },
      colors:{
        tomato: "#E50914",
        marigold: "#ffbe0b",
      }
    },
  },
  plugins: [],
}