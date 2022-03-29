module.exports = {
  content: [
    "./css/styles.css",
    "./index.html",
    "./About.htm",
    "./Adventures.htm",
    "./Lodging.htm",
    "./Rates.htm",
    "./Dining.htm",
    "./Contact.htm",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./JS/script.js"
],
  theme: {
    screens: {
      'sm': '375px',

      'tablet': '980px',
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
