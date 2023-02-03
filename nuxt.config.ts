export default defineNuxtConfig({
  app: {
    head: {
      title: "Mikael Nyström",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/vl2.svg" }],
    },
  },

  components: true,

  modules: [
    ["vue3-notion/nuxt", { css: true }],
    
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode'

  ],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

});
