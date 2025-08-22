/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '900': '901px',
        '800': '801px',
        '700': '701px',
      },
    },
  },
  plugins: [],
}
