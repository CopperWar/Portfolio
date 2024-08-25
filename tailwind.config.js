/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      fontFamily: {
        'dosis': [ "Inconsolata", 'monospace'],
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, rgba(103,103,103,1) 0%, rgba(74,74,74,1) 50%, rgba(0,0,0,1) 100%)',
        'gradient-background': 'radial-gradient(circle, rgba(103,103,103,1) 0%, rgba(144,144,144,1) 50%, rgba(255,255,255,1) 100%)',

      },
      textColor: {
        'transparent': 'transparent',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
        },
        '.text-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}