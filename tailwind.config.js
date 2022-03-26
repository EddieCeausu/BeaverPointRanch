module.exports = {
  content: [
    "./css/styles.css",
    "./index.html",
    "./About",
    "./Adventures",
    "./Lodging",
    "./Rates",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./JS/script.js"
],
  theme: {
    screens: {
      'sm': '640px',

      'tablet': '872px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1375px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
