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
      const list = [];
      for (let i = 0; i < navRouteData.length; i++) {
        if (
          navRouteData[i].path === "/" ||
          navRouteData[i].path === "/product/:id" ||
          navRouteData[i].path === "/article/:id" ||
          navRouteData[i].path === "/cart" ||
          navRouteData[i].path === "/order" ||
          navRouteData[i].path === "/checkout/:orderId" ||
          navRouteData[i].name === "404"
        ) {
          continue;
        }
        list.push({
          path: navRouteData[i].path,
          title: navRouteData[i].meta.title,
          enTitle: navRouteData[i].meta.enTitle,
        });
      }
      return list;
    },
  },
});
