
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Simone Colaci CV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Simone Colaci CV' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpeg' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    './assets/css/bulma-timeline.min.css'
  ],
  modules: [
    'vue-scrollto/nuxt',
    '@nuxtjs/style-resources'
  ],

    //You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['./assets/scss/index.scss']
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: ['@/plugins/vue-observe-visibility.js', '@/plugins/vue-scroll-to.js'],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
  ],
}
