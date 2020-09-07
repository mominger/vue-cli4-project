export default [
  {
    path: "/business-a/page-a",
    name: "business-a-page-a",
    meta: {
      auth: false,
      title: "专题学习详情"
    },
    component: () =>
      import(
        /* webpackChunkName: "business-a-page-a" */
        "./business-a-page-a/index.vue"
      )
  },
  {
    path: "/business-a/page-b",
    name: "business-a-page-b",
    meta: {
      auth: true,
      title: "需要登录才能访问的页"
    },
    component: () =>
      import(
        /* webpackChunkName: "business-a-page-b" */
        "./business-a-page-b/index.vue"
      )
  }
];
