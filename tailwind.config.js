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
      width: {
        '128': '32rem',
        '140': '35rem',
        '152': '38rem',
        '160':'40rem'
      },
      height: {
        '128': '32rem',
        '140': '35rem',
        '152': '38rem',
        '160':'40rem'
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
