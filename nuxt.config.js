module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Наша доставка',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|PT+Sans:400,700&subset=cyrillic-ext"
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
}

