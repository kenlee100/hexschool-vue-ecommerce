import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FrontLayout",
      component: () => import("../views/FrontLayout.vue"),
      // 巢狀路由
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "products",
          name: "ProductListView",
          component: () => import("../views/front/ProductListView.vue"),
        },
        {
          path: "product/:id", // 動態路由
          name: "ProductDetail",
          component: () => import("../views/front/ProductDetail.vue"),
        },
        {
          path: "article",
          name: "ArticleView",
          component: () => import("../views/front/ArticleView.vue"),
        },
        {
          path: "about",
          name: "AboutView",
          component: () => import("../views/front/AboutView.vue"),
        },
        {
          path: "faq",
          name: "FaqView",
          component: () => import("../views/front/FaqView.vue"),
        },
        {
          path: "cart",
          name: "CartView",
          component: () => import("../views/front/CartView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/front/LoginView.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      name: "404",
      component: () => import("../views/404.vue"),
    },
  ],
  linkActiveClass: "nav-active",
});

export default router;
