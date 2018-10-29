import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Carstyle from './views/carstyle.vue'
import HandBook from './views/handbook.vue'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/carstyle',
    name: 'carstyle',
    component: Carstyle,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/handbook',
    name: 'handbook',
    component: HandBook
  }
]

const router = new Router({
  mode: 'history',
  routes
})
export default router
