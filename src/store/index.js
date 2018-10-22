import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    theme: [
      {
        themetype: 'themeone',
        styles: [
          {
            'common': [
              {
                ':root': {
                  '--title-background-color': '#EEEEEE',
                  '--title-font-color': '#666'
                }
              }
            ]
          }
        ]
      }
    ]
    // theme: 'themeone'
  },
  mutations: {
    changetheme (state, themetype) {
      state.theme.themetype = themetype
    }
  },
  actions: {
    changetheme (context, themetype) {
      return new Promise(function (resolve, reject) {
        context.commit('changetheme', themetype)
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
