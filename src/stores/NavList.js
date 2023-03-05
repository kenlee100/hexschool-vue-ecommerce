import { defineStore } from "pinia";

export default defineStore("navListMenu", {
  // => 直接回傳的寫法
  state: () => ({
    navList: [
      {
        path: "/products",
        name: "推薦行程",
        en: "RECOMMEND",
      },
      {
        path: "/article",
        name: "旅行日記",
        en: "BLOG",
      },
      {
        path: "/about",
        name: "關於我們",
        en: "ABOUT",
      },
      {
        path: "/faq",
        name: "常見問題",
        en: "FAQ",
      },
    ],
  }),
});
