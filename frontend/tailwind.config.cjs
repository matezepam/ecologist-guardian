/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        color1: "#cf0638",
        color2: "#fa6632",
        color3: "#fecd23",
        color4: "#0a996f",
        color5: "#0a6789"
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
