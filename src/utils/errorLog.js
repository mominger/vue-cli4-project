import Vue from "vue";

export default (() => {
  const IS_OUT_ERRORLOG = process.env.VUE_APP_IS_OUT_ERRORLOG == "true";

  if (IS_OUT_ERRORLOG) {
    /*   Sentry.init({
              dsn: config.SENTRY_DSN
            }); */
  }

  const errorHandler = function(err, vm, info) {
    //异常数据提交到sentry
    if (IS_OUT_ERRORLOG) {
      // Sentry.captureMessage(err);
    }

    //默认打印到控制台
    console.error(err, info);
  };

  Vue.config.errorHandler = errorHandler;
  Vue.prototype.$throw = error => errorHandler(error, this);
})();
