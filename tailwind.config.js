module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'yellow': '#FFFBD8',
      'pink': '#FDDAE0',
      'blue': '#d7ecff'
      }),
    extend: {
      colors: {
        nayya:{
          blue: "#074C93",
          green: "#219653",
          lightgray: "#E5E5E5",
          pharmacy: "#E97F5D",
          claims: "#2DA7DB",
          medical: "#F34F4F",
          reminders: "#EA974D"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
