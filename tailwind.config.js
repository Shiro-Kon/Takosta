/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1980px",
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
        "light-gray-green": "#D4D9D3",
        "almost-white": "#F9F9F9",
        "soft-sand": "#968625",
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
