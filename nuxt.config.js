import ua from './locales/ua.json';
import ru from './locales/ru.json';

export default {

  target: 'static',

  router: {
    base: '/rozetka-clone-front/',
  },

  env: {
    apiBaseUrl: process.env.API_BASE_URL || 'https://nasoloda.pp.ua/api/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rozetka-clone-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'Permissions-Policy', content: 'interest-cohort=()' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/colors.scss', '~assets/css/normalize.css'],

  loading: {
    color: '#D2D4E9',
    height: '2px',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/nuxt.init.server',
    '~/plugins/nuxt.init.client',
    '~/plugins/directive',
    '~/plugins/toast',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000',
  },

  i18n: {
    locales: ['ua', 'ru'],
    defaultLocale: 'ua',
    vueI18n: {
      fallbackLocale: 'ua',
      messages: { ru, ua },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
