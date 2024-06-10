/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cocomat: ['Cocomat Pro', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        pushkin: ['PushkinScriptHigh']
      },
      colors: {
        'light-gray-green': '#D0D1CA', 
        'almost-white': '#FDFDFD',
        'mahogany-brown': '#4B4432'
      },
    },
  },
  variants: {},
  plugins: [],
}