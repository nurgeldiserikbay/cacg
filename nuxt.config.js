export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  head: {
    title: 'CACG-2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      href: '/fonts/fonts.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdn.plyr.io/3.6.7/plyr.css'
    }],
    script: [{
      src: 'https://cdn.plyr.io/3.6.7/plyr.polyfilled.js',
    }, {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js',
    }, {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js',
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/_default_styles.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  styleResources: {
    scss: ['@/assets/styles/_default_styles.scss']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  scrollBehavior: function () {
    return {
      x: 0,
      y: 0
    }
  }
}
