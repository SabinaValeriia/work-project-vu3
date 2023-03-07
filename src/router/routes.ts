import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "../views/RegistrationView.vue"
      ),
  },
  {
    path: "/reset",
    name: "ResetView",
    component: () =>
      import(/* webpackChunkName: "reset" */ "../views/ResetView.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/TestView.vue"),
  },
  {
    path: "/recipe",
    name: "recipe",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/RecipeView.vue"),
  },
  {
    path: "/pagination",
    name: "Pagination",
    component: () =>
      import(
        /* webpackChunkName: "pagination" */ "../views/PaginationView.vue"
      ),
  },
];

export default routes;
