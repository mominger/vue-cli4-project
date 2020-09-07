import axios from "axios";
import store from "@/store";

/**
 * 注册全局 Axios 拦截器
 */
export function registerInterceptor(options) {
  axios.interceptors.request.use(config => {
    //注入鉴权的token
    config.headers["idToken"] = store.getters.token;

    return {
      withCredentials: true,
      ...options,
      ...config
    };
  });
  axios.interceptors.response.use(
    res => {
      const ret = res.data;
      return Promise.resolve(ret);
    },
    err => {
      const status = err.response && err.response.status;
      let message = "";

      switch (status) {
        case 404:
          message = "请求资源未找到";
          break;
        case 401:
          message = "无权限";
          setTimeout(() => {
            //处理登录失效，比如跳转到登陆页
          }, 1000);
          break;
        case 500:
          message = "服务器异常";
          break;
        // 其他错误...
        default:
          break;
      }

      //todo:应考虑是否统一 弹出错误消息
      console.error(message || err.message);

      return Promise.reject(err);
    }
  );
}
