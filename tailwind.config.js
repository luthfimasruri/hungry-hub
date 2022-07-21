/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#DF252A',
          50: '#F7C5C6',
          100: '#F4B3B5',
          200: '#EF9092',
          300: '#E96C70',
          400: '#E4494D',
          500: '#DF252A',
          600: '#B21A1E',
          700: '#811316',
          800: '#500C0E',
          900: '#1F0505',
        },
      },
      fontSize: {
        '3xs': '.55rem',
        '2xs': '.65rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
