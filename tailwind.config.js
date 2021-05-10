module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './pages/**/*.md',
      './src/**/*.vue',
      './src/**/*.md',
      './src/**/*.ts',
    ],
  },
  plugins: [],
  darkMode: 'class',
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      textColor: {
        link: '#5D68FE',
        primary: '#616161',
        dark: '#333333',
        light: '#BDBDBD',
      },
      colors: {
        colored: '#658EED',
        primary: {
          button: '#333333',
          background: '#81B5CB',
        },
      },
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    screens: {
      mobile: { max: '679px' },
      tablet: '680px',
      desktop: '1020px',
      maxiw: '1500px',
    },
  },
  corePlugins: {
    animation: false,
    container: false,
    boxShadow: false,
    ringOffsetColor: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    tableLayout: false,
    textOpacity: false,
  },
}
