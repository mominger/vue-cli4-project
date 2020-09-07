export default [
    {
      path: "/business-a",
      name: "business-a",
      meta: {
          auth: false,
          title: "business-a name"
      },
      component: () =>
        import(
          /* webpackChunkName: "business-a" */ "@/views/business-a/index.vue"
        )
    },
  ];
  