import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    theme: 'themeone'
  },
  mutations: {
    changetheme (theme, themetype) {
      this.state.theme = themetype
    }
  },
  actions: {
    changetheme (context) {
      return new Promise(function (resolve, reject) {
        context.commit('changetheme', context.theme)
        resolve()
      })
    }
  },
  getters: {
    gettheme: state => {
      return state.theme
    }
  }
})

export default store
