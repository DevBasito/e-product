/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'Orange': "hsl(26, 100%, 55%)",
      'PaleOrange': "hsl(25, 100%, 94%)"
    },
    fontFamily: {
      sans: 'Kumbh'
      
    }
  },
  plugins: [],
}
