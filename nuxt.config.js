module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Наша доставка',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'перевозки по россии быстро и надежно' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ]
  },
  css: [
    '~/assets/fonts/bebas_neue/style.css',
    '~/assets/fonts/pobeda/WEB/Pobeda-Regular/styles.css',
    '~/assets/fonts/pobeda/WEB/Pobeda-Bold/styles.css',
    '~/assets/fonts/GothamPro/style.css',
    '~/assets/fonts/pt-sans-narrow/style.css',
    '~/assets/fonts/open-sans/style.css'
  ],
  plugins: [
    { src: '~/plugins/base-components'},
    { src: '~/plugins/vue-scroll-to'},
    { src: '~/plugins/vue-js-modal', mode: 'client' },
    { src: '~/plugins/vue-google-maps', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' }
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0000ff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    postcss: {
      plugins: {
        'postcss-css-variables': false
      }
    },
    extractCSS: true
  },
  buildModules: [
    '@nuxt/postcss8'
  ],
  router: {
    base: '/our-delivery/'
  },
  target: 'static',
  ssr: false,
  loadingIndicator: {
      name: 'pulse',
  },
  axios: {
    baseURL: 'https://api.xn--80aaaajk8bsm4al1e.xn--p1ai/wp-json/wp/v2/'
  }
}

