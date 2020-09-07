const env = process.env;
const isProduct = env.NODE_ENV == "production";

module.exports = {
  publicPath: isProduct ? env.VUE_APP_PUBLIC_PATH : "/",
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    open: true,
    proxy: {
      "/v1": {
        target: "https://www.baidu.com", //todo: 这里需替换为自己的请求路径
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          "^/v1": "/v1" //路径的替换规则
        }
      }
    }
  }
};
