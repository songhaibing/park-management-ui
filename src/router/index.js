import Vue from 'vue'
import VueRouter from 'vue-router'
import {ROUTERS} from './router'
import Cookie from 'js-cookie'

Vue.use(VueRouter);

let router = new VueRouter({
  routes: ROUTERS
});

/**
 * 路由前置钩子函数
 */
// router.beforeEach((to, from, next) => {
//   // 如果用户未登陆且不是跳转登陆页
//   if (Cookie.get('role') === undefined && to.path !== '/') {
//     // 跳转登陆页
//     alert(1);
//     next('/')
//   } else {
//     // 如果此路由需要验证
//     if (to.meta.auth) {
//       // 如果当前角色有权限（权限信息加密后保存在session中，所以获取权限在sessionStorage中取）
//       if (to.meta.role.indexOf(Cookie.get('role')) >= 0) {
//   next()
//       } else {
//         // 无权限跳转路由到'/403'
//         next('/403')
//       }
//     } else {
//       next()
//     }
//   }
// });
export default router
