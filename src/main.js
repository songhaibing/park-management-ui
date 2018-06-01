// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HTTP from './lib/httpRequest'
import API from "./lib/api"
import ROLE_MAP from './lib/role'
import Cookies from 'js-cookie'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';


Vue.use(Vant);
Vue.use(iView);
Vue.prototype.$HTTP = HTTP
Vue.prototype.$API = API
Vue.prototype.$ROLE_MAP = ROLE_MAP
Vue.prototype.$Cookies = Cookies



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
