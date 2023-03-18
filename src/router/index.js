import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FrontLayout",
      component: () => import("@/views/FrontLayout.vue"),
      // 巢狀路由
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/front/HomeView.vue"),
          meta: {
            title: `首頁`,
            enTitle: "Home",
          },
        },
        {
          path: "products",
          name: "ProductListView",
          component: () => import("@/views/front/ProductListView.vue"),
          query: {
            category: "全部地區",
          },
          meta: { title: `推薦行程`, enTitle: "RECOMMEND" },
        },
        {
          path: "product/:id", // 動態路由
          name: "ProductDetail",
          component: () => import("@/views/front/ProductDetail.vue"),
          meta: { title: `推薦行程`, enTitle: "RECOMMEND" },
        },
        {
          path: "article",
          name: "ArticleView",
          component: () => import("@/views/front/ArticleView.vue"),
          meta: { title: `旅行日記`, enTitle: "BLOG" },
        },
        {
          path: "article/:id",
          name: "ArticleDetail",
          component: () => import("@/views/front/ArticleDetail.vue"),
          meta: { title: `旅行日記`, enTitle: "BLOG" },
        },
        {
          path: "about",
          name: "AboutView",
          component: () => import("@/views/front/AboutView.vue"),
          meta: { title: `關於我們`, enTitle: "ABOUT" },
        },
        {
          path: "faq",
          name: "FaqView",
          component: () => import("@/views/front/FaqView.vue"),
          meta: { title: `常見問題`, enTitle: "FAQ" },
        },
        {
          path: "cart",
          name: "CartView",
          component: () => import("@/views/front/CartView.vue"),
          meta: { title: `購物車`, enTitle: "CART" },
        },
        {
          path: "order",
          name: "OrderView",
          component: () => import("@/views/front/OrderView.vue"),
          meta: { title: `確認訂單`, enTitle: "ORDER" },
        },
        {
          path: "/checkout/:orderId",
          name: "checkout",
          component: () => import("@/views/front/CheckoutView.vue"),
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
          component: () => import("@/views/front/404.vue"),
          meta: { title: `404`, enTitle: "" },
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 300);
    });
  },
  linkActiveClass: "nav-active",
});

export default router;
