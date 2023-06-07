import { createRouter, createWebHistory } from "vue-router";
import LandingComponent from "../views/Landing.vue";
import SigninComponent from "../views/Signin.vue";

const routes = [
  {
    path: "/",
    component: LandingComponent,
  },
  {
    path: "/signin",
    component: SigninComponent,
  },
  {
    path: "/intro-not-booked",
    component: () => import("../views/IntroUnbooked.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
