import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      // 路由级代码拆分
      // 这会为此路由生成一个单独的块 (About.[hash].js)
      // 访问路由时延迟加载。
      component: () => import("../views/AboutView.vue"),
    },
  ],
})

export default router
