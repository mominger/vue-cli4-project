export default function(router, store) {
  router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    }

    //如果需鉴权，判断是否有token
    if (to.meta.auth) {
      //没有跳向登录页
      if (!store.getters.token) {
        next({ name: "login", query: { from: to.fullPath } });
        return;
      }
    }

    next();
  });
}
