const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // https://vercel.com/design/color
      colors: {
        babyboo: {
          DEFAULT: "#F5F5F5",
          brown: "#854223",
          lightbrown: "#C4C9C1",
          darkbrown: "#362B24",
          dark: "#261F18",
          button: "#CFCCC5",
          ribbon: "#C8C5BE",
          tag: "#F1ECE6",
          rose: "#6A474C"
        },
      },
      fontFamily: {
        sans: ['Oswald', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
};
