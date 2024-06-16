/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile-landscape': {'raw': '(max-width: 750px) and (orientation: landscape)'},
      sm: "375px",
     'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',
    
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