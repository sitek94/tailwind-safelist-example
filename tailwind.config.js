const colors = require('tailwindcss/colors')


module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
