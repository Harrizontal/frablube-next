const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        rose: colors.rose,
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#F2EFE6',
        'beige':'#F9F6F6'
      }),
      height: {
        '128': '32rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
