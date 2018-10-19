import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    theme: 'themeone'
  },
  mutations: {
    changetheme (theme, themetype) {
      theme = themetype
    }
  },
  actions: {

  }
})

export default store
