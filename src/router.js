import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/index.vue'
import Carstyle from './views/carstyle.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/carstyle',
    name: 'carstyle',
    component: Carstyle
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
