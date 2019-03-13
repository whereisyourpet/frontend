// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from "./store/index";
import echarts from 'echarts'

import amcharts from 'amcharts3'

import qs from 'qs'

import axios from 'axios' //引入axios
Vue.prototype.$axios=axios;
Vue.prototype.$echarts = echarts
axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded';
axios.defaults.withCredentials=true;


Vue.config.productionTip = false;
Vue.use(Vuex);

Vue.use(echarts);
//import element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);




/* router auth */
// router.beforeEach(function(to, from, next) {
//   console.log(store.state.isLogged, to.path);
//
//   let { meta } = to;
//   let { auth = false } = meta;
//   if (!store.state.isLogged && auth == true) {
//     next("/login");
//   } else {
//     next();
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
