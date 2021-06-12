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
        brand: {
          DEFAULT: 'var(--colors-brand)',
          100: 'var(--colors-brand-100)',
          300: 'var(--colors-brand-300)',
          700: 'var(--colors-brand-700)',
          900: 'var(--colors-brand-900)',
        },
        purpple: {
          DEFAULT: '#882D60',
          100: '#CC88AE',
          300: '#AA5585',
          700: '#661141',
          900: '#440026',
        },
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
