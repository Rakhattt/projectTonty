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
        component: () => import("../components/moduleInner/AuthComponent/SignUp.vue"),
      },
      {
        path: "/sign-in",
        name: "sign-in",
        component: () => import("../components/moduleInner/AuthComponent/SignIn.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../components/moduleInner/AuthComponent/Login.vue"),
      },
      {
        path: "/personal-account",
        name: "personal-account",
        component: () => import("../components/moduleInner/PersonalAccount.vue"),
        meta: {
          breadcrumb: "Личный кабинет",
          pageTitle: "Личный кабинет",
        },
      },
      {
        path: "/guide",
        name: "guide",
        component: () => import("../components/moduleInner/Guide.vue"),
        meta: {
          breadcrumb: "Справочник",
          pageTitle: "Справочник",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
