import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import mock from './api/mock.js'
import api from './api/api'

Vue.use(mock)
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
