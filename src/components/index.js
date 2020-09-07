import Vue from "vue";

// 扫描global 目录下的 .js
const gCmpsContext = require.context("./global", true, /\.js$/);

gCmpsContext.keys().forEach(component => {
  const cmp = gCmpsContext(component);

  //兼容 import+export 和 require+module.export
  const ctrl = cmp.default || cmp;
  Vue.component(ctrl.name, ctrl);
});
