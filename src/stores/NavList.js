import { defineStore } from "pinia";

export default defineStore("navListMenu", {
  // => 直接回傳的寫法
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
