module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#8acbf7',
          500: '#384955',
          700: '#9caebc',
        },
        yellow: {
          DEFAULT: '#febb00',
        },
        black: {
          DEFAULT: '#384955',
          700: '#384955',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
// #8acbf7 blue
// 200 #8acbf7
// 700 #9caebc
// purplle #b77c9f
// #febb00 yelllow
// #384955 black
