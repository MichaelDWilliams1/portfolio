/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'IBM': 'IBM Plex Mono'
      },
      height: {
        '1/10': '10%',
        '9/10': '90%',
        '800': '800px'
      },
      screens: {
        '2xsm': '300px',
        'xsm': '350px'
      }
    },
  },
  plugins: [],
}