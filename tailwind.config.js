module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'prod',
    content: ['src/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-page': '#fbfbfb',
        'primary-green': '#0FAD58',
        'primary-purple': '#6D36DA',
        'dark-purple': '#572BAE',
        'light-purple': '#F3EDFF',
        'primary-black': '#2d2d2d'
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
