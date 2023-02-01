export default defineNuxtConfig({
  app: {
    head: {
      title: "Mikaels Website",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  components: true,

  modules: [
    ["vue3-notion/nuxt", { css: true }],
    
    "@nuxtjs/tailwindcss",
  ],
});
