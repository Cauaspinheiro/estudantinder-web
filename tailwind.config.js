module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'prod',
    content: ['src/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bg_page: "#fbfbfb",
      green: "#0FAD58",
      purple: "#5B14F5",
      light_purple: "#F3EDFF",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
