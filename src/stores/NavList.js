import { defineStore } from "pinia";

export default defineStore("navListMenu", {
  // => 直接回傳的寫法
  state: () => ({
    webTitle: "JAPAN TRIP",
    navRouteData: [],
  }),
  actions: {
    pushRouteData(content) {
      this.navRouteData = content;
    },
  },
  getters: {
    // 給選單用
    navList({ navRouteData }) {
      return navRouteData
        .filter((item) => {
          return item.meta.menuGroup === "nav-menu";
        })
        .map((item) => {
          return {
            path: item.path,
            title: item.meta.title,
            enTitle: item.meta.enTitle,
          };
        });
    },
  },
});
