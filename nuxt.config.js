require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dine-with-me',
    htmlAttrs: {
      lang: 'he',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  env: {
    api: process.env.API_ENDPOINT,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/trendChart.js', ssr: false },
    { src: '~/plugins/cloudinary.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://cloudinary.nuxtjs.org/setup
    '@nuxtjs/cloudinary',
  ],
  tailwindcss: {
    jit: true,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/cloudinary'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.API_KEY, // only needed if you are using server-side upload
    apiSecret: process.env.API_SECRET, // only needed if you are using server-side upload
    useComponent: true, // use Vue components
  },
}
