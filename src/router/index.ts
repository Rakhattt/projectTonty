import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: () => import("../components/module/Main.vue"),
    meta: {
      breadcrumb: "Карточки",
      pageTitle: "Все карточки",
      requiresAuth: true,
    },
  },

  {
    path: "/",
    // component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("../components/moduleInner/AuthComponent/SignUp.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("../components/moduleInner/AuthComponent/SignIn.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/login",
        name: "login",
        component: () =>
          import("../components/moduleInner/AuthComponent/Login.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/personal-account",
        name: "personal-account",
        component: () =>
          import("../components/moduleInner/PersonalAccount.vue"),
        meta: {
          breadcrumb: "Личный кабинет",
          pageTitle: "Личный кабинет",
          requiresAuth: false,
        },
      },
      {
        path: "/guide",
        name: "guide",
        component: () => import("../components/moduleInner/Guide.vue"),
        meta: {
          breadcrumb: "Справочник",
          pageTitle: "Справочник",
          requiresAuth: false,
        },
      },
      {
        path: "/personal-account-details/:id",
        name: "personal-account-details",
        component: () =>
          import("../components/moduleInner/PersonalAccountDetail.vue"),
        meta: {
          breadcrumb: "Детальная страница",
          pageTitle: "Детальная страница",
          requiresAuth: false,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const user_id = localStorage.getItem("user_id");

  if (to.meta.requiresAuth && !user_id) {
    next({ path: "/sign-in" });
  } else {
    next();
  }
});

export default router;
