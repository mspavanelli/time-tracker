const config = defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/test-utils/module",
    "@pinia/nuxt",
  ],
  srcDir: "src",
  shadcn: {
    prefix: "",
    componentDir: "./src/components/ui",
  },
  components: {
    dirs: ["./components/ui"],
  },
  css: ["~/styles/global.css"],
  app: {
    head: {
      title: "Time Tracker",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
});

export default config;
