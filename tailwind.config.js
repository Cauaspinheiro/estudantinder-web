module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'prod',
    content: ['*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-page': '#fbfbfb',
        'primary-green': '#0FAD58',
        'primary-purple': '#5B14F5',
        'light-purple': '#F3EDFF',
      },
      fontFamily: {
        poppins: 'Poppins, Roboto, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
