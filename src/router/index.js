import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  ...require("../views/misc").default,
  ...require(`../views/business-a/router.js`).default
];
const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_PUBLIC_PATH,
  routes
});

export default router;
