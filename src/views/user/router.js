export default [
  {
    path: "/user/test",
    name: "user-test",
    component: () =>
      import(/* webpackChunkName: "user-test" */ "./test/index.vue")
  }
  //...
];
