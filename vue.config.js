const env = process.env;
const isProduct = env.NODE_ENV == "production";
const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');

let plugins = [];

//增加骨架屏
plugins.push(new SkeletonPlugin({
    pathname: path.resolve(__dirname, './shell'), // 用来存储 shell 文件的地址
    staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同
    routes: ['/', '/about'], // 将需要生成骨架屏的路由添加到数组中
}));

if (!isProduct) {
    //增加打包分析
    plugins.push(new BundleAnalyzerPlugin({
        openAnalyzer: false
    }));
}

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
    },
    configureWebpack: {
        plugins: plugins,
        /* externals: {
          vue: "window.Vue",
          "vue-router": "window.VueRouter"
        } */
    },
    chainWebpack: (config) => { // 解决vue-cli3脚手架创建的项目压缩html 干掉<!-- shell -->导致骨架屏不生效
        if (process.env.NODE_ENV !== 'development') {
            config.plugin('html').tap(opts => {
                opts[0].minify.removeComments = false
                return opts
            })
        }

    }
};