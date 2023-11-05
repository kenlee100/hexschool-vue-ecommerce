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
        .filter((item) => item.meta.mainMenu)
        .map((mapItem) => {
          return {
            path: mapItem.path,
            title: mapItem.meta.title,
            enTitle: mapItem.meta.enTitle,
          };
        });
    },
  },
});
