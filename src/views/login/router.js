export default [
  {
    path: "/login/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "./login.vue")
  }
];
