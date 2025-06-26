/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily:{
        poppins: "Poppins"
      },
      colors: {
        primary: '#362FD9',
        secondary: '#747474',
        dark: '#747474',
        bgprimary: '#F0EFFF',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

