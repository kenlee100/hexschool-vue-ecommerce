import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FrontLayout",
      component: () => import("@/views/FrontLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
          meta: {
            title: `首頁`,
            enTitle: "Home",
          },
        },
        {
          path: "products",
          name: "ProductListView",
          component: () => import("@/views/ProductListView.vue"),
          query: {
            category: "全部地區",
          },
          meta: {
            title: `推薦行程`,
            enTitle: "RECOMMEND",
            mainMenu: "nav-group",
          },
        },
        {
          path: "product/:id",
          name: "ProductDetail",
          component: () => import("@/views/ProductDetail.vue"),
          meta: { title: `推薦行程`, enTitle: "RECOMMEND" },
        },
        {
          path: "article",
          name: "ArticleView",
          component: () => import("@/views/ArticleView.vue"),
          meta: { title: `旅行日記`, enTitle: "BLOG", mainMenu: "nav-group" },
        },
        {
          path: "article/tags/:tag",
          name: "ArticleTagView",
          component: () => import("@/views/ArticleView.vue"),
          meta: { title: `旅行日記`, enTitle: "BLOG" },
        },
        {
          path: "article/:id",
          name: "ArticleDetail",
          component: () => import("@/views/ArticleDetail.vue"),
          meta: { title: `旅行日記`, enTitle: "BLOG" },
        },

        {
          path: "about",
          name: "AboutView",
          component: () => import("@/views/AboutView.vue"),
          meta: { title: `關於我們`, enTitle: "ABOUT", mainMenu: "nav-group" },
        },
        {
          path: "faq",
          name: "FaqView",
          component: () => import("@/views/FaqView.vue"),
          meta: { title: `常見問題`, enTitle: "FAQ", mainMenu: "nav-group" },
        },
        {
          path: "cart",
          name: "CartView",
          component: () => import("@/views/CartView.vue"),
          meta: { title: `購物車`, enTitle: "CART" },
        },
        {
          path: "order",
          name: "OrderView",
          component: () => import("@/views/OrderView.vue"),
          meta: { title: `確認訂單`, enTitle: "ORDER" },
        },
        {
          path: "/checkout/:orderId",
          name: "checkout",
          component: () => import("@/views/CheckoutView.vue"),
          meta: {
            title: `訂單完成`,
            enTitle: "CHECKOUT",
          },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/FrontLayout.vue"),
      children: [
        {
          path: "",
          name: "404",
          component: () => import("@/views/404View.vue"),
          meta: { title: `404`, enTitle: "" },
        },
      ],
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 300);
    });
  },
  linkActiveClass: "nav-active",
});

export default router;
