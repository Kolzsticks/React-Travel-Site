/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
      spacing: {
        '16': '64px', // Custom spacing value
      },
  },
  plugins: [],
}