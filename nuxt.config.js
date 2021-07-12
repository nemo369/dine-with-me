import axios from 'axios'
require('dotenv').config()

const dynamicRoutes = () => {
  return axios
    .get(`${process.env.API_ENDPOINT}contestants?_limit=-1`)
    .then((res) => {
      return res.data.map((contestant) => {
        return {
          route: '/' + contestant.id,
          payload: contestant,
        }
      })
    })
}
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;700&display=swap',
      },
    ],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
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
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://cloudinary.nuxtjs.org/setup
    '@nuxtjs/cloudinary',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
  ],
  tailwindcss: {
    jit: true,
  },
  googleAnalytics: {
    id: 'G-3T6HXSXPJ9',
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
  generate: {
    generate: {
      routes: dynamicRoutes,
    },
  },
}
