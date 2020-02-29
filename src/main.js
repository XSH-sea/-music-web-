// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import scroll from '../src/assets/js/rotationChart'
import api from '../src/assets/js/api'
import store from './store'
 
Vue.config.productionTip = false
Vue.prototype.scrollJs=scroll
Vue.prototype.api=api

Vue.use(VueAxios,Axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
