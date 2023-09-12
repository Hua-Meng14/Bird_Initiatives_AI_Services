// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    currencyApiKey: process.env.CURRENCY_API_KEY,
    public: {
      fakeStoreApiUrl: "https://fakestoreapi.com/",
      currencyApiUrl: "https://api.currencyapi.com/v3/",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Store Dojo",
      meta: [{ name: "description", content: "Everithing about Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
