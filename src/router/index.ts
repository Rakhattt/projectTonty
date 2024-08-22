import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: () => import("../components/module/Main.vue"),
    meta: {
      breadcrumb: "Карточки",
      pageTitle: "Все карточки",
    },
  },

  {
    path: "/",
    // component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-up",
        name: "sign-up",
        component: () => import("../components/moduleInner/SignUp.vue"),
      },
      {
        path: "/sign-in",
        name: "sign-in",
        component: () => import("../components/moduleInner/SignIn.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
