import Vue from 'vue'
import Router from 'vue-router'
import businessA from '@/router/business-a'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: `/${process.env.PUBLIC_PATH}/`,
  routes: [
    ...businessA
  ]
})
