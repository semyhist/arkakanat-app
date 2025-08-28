// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Bu satırın varlığı çok önemli
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}