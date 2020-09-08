import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = [];

if (process.env.VUE_APP_MODULE) {
  routes.push(...require("../views/misc/router.js").default);
  routes.push(...require("../views/login/router.js").default);
  routes.push(
    ...require(`../views/${process.env.VUE_APP_MODULE}/router.js`).default
  );
} else {
  const routerContext = require.context("@/views", true, /router\.js$/);
  routerContext.keys().forEach(route => {
    const routerModule = routerContext(route);

    //兼容 import+export 和 require+module.export
    routes.push(...(routerModule.default || routerModule));
  });
}

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_PUBLIC_PATH,
  routes
});

export default router;
