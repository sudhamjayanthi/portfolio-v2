const colors = require('tailwindcss/colors');

module.exports = { 
  mode: 'jit',
  darkMode: 'class',
  content : ["./index.html"],
  theme: {
    extend: {
      fontFamily : {
        'inter' : ['Inter', 'sans-serif']
      },
      colors : {
        sky: colors.sky,
      }
    }
  },
  variants: {},  
  plugins: [],
}
