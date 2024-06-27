/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      'mobile-landscape': { 'raw': '(min-width: 375px) and (max-width: 667px) and (orientation: landscape)' },
    },
    extend: {
      fontFamily: {
        cocomat: ["Cocomat Pro", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
        pushkin: ["PushkinScriptHigh"],
        forum: ["Forum"],
      },
      colors: {
        "light-gray-green": "#D0D1CA",
        "almost-white": "#FDFDFD",
        "mahogany-brown": "#4B4432",
        "soft-sand": "#626936",
        "pale-beige": "#E7D9D4",         
        "grayish-beige": "#ABACA4",         
        "light-gray": "#BFBDB1",         
        "warm-gray": "#B7B5AE",         
      },
    },
  },
  variants: {},
  plugins: [],
};
