import { defineStore } from "pinia";

export default defineStore("navListMenu", {
  state: () => ({
    navList: [
      {
        path: "/products",
        name: "推薦行程",
      },
      {
        path: "/article",
        name: "旅行日記",
      },
      {
        path: "/about",
        name: "關於我們",
      },
      {
        path: "/faq",
        name: "常見問題",
      },
    ],
  }),
});
