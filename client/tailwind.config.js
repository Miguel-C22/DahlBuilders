/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      height: {
      'tall': '42rem'
    },
    textShadow: {
      'dark-lg': '2px 2px 4px rgba(0, 0, 0, 1)', // Customize the shadow as needed
    },
  },
  },
  daisyui: {
    themes: [],
 },
  plugins: [require('daisyui'), function({ addUtilities }) {
    addUtilities({
      '.text-shadow-dark-lg': {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 1)', // Customize the shadow as needed
      },
    })
  }],
}

