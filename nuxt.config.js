export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',

  router: {
    extendRoutes(routes, resolve) {
      routes.splice(0);
      routes.push(
        ...[
          {
            path: '/',
            component: resolve('pages/layout'),
            children: [
              {
                path: '',
                name: 'home',
                component: resolve('pages/home')
              },
              {
                path: 'profile/:username/',
                name: 'Profile',
                component: resolve('pages/profile')
              },
              {
                path: 'profile/:username',
                name: 'Profile',
                component: resolve('pages/profile')
              },
              {
                path: 'settings',
                name: 'Settings',
                component: resolve('pages/settings')
              },
              {
                path: 'article/:slug',
                name: 'Article',
                component: resolve('pages/article')
              },
              {
                path: 'edit',
                name: 'Create',
                component: resolve('pages/editor')
              },
              {
                path: 'edit/:slug',
                name: 'Edit',
                component: resolve('pages/editor')
              }
            ]
          },
          {
            path: '/register',
            name: 'register',
            component: resolve('pages/login/register')
            // children: [
            //   {
            //     path: '',
            //     name: 'registe',
            //     component: resolve('pages/login/register')
            //   }
            // ]
          }
        ]
      );
    }
  },

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  // head: {
  //   title: 'Nuxt.js starter for CSB',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: 'Official Nuxt.js starter for CodeSandBox'
  //     }
  //   ],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  // },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxt/http',
    // TODO: Remove it if you want to eject from codeSandbox
    './codesandbox'
  ],

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
