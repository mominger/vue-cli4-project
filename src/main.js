import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/errorLog.js";
import auth from "./router/routerFilter";

Vue.config.productionTip = false;

auth(router, store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
