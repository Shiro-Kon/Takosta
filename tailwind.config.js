/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "700px",
      lg: "1010px",
      xl: "1440px",
      xxl: "1690px",
    },
    extend: {
      fontFamily: {
        cocomat: ['Cocomat Pro', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        pushkin: ['PushkinScriptHigh'],
        forum: ['Forum'],
      },
      colors: {
        'light-gray-green': '#D0D1CA', 
        'almost-white': '#FDFDFD',
        'mahogany-brown': '#4B4432',
        'soft-sand' :'#968625',
      },
    },
  },
  variants: {},
  plugins: [],
}