import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/base.css'
import axios from 'axios'
Vue.prototype.$axios=axios;

Vue.filter("imgFilter",(inp)=>{
  return inp.replace(/{size}/,'400');
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
