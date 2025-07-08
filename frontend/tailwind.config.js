/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./index.html" // Make sure this matches your src structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}