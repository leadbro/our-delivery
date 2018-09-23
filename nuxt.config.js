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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:500,600|Open+Sans:400,700&subset=cyrillic-ext"
      },
    ]
  },
  css: [
    '~/assets/fonts/bebas_neue/style.css',
    '~/assets/fonts/pobeda/WEB/Pobeda-Regular/styles.css',
    '~/assets/fonts/pobeda/WEB/Pobeda-Bold/styles.css',
    '~/assets/fonts/GothamPro/style.css'
  ],
  plugins: [
    { src: '~/plugins/base-components'},
    { src: '~/plugins/vue-awesome-swiper', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  mode: 'spa',
  axios: {
    baseURL: 'http://api.xn--80aaaajk8bsm4al1e.xn--p1ai/wp-json/wp/v2/'
  }
}

