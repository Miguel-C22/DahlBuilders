/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { height: {
      'tall': '42rem'
    }},
  },
  daisyui: {
    themes: [],
 },
  plugins: [require('daisyui'),],
}

