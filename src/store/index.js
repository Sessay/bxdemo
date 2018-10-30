import Vue from 'vue'
import Vuex from 'vuex'
import VueLocalStorage from 'vue-localstorage'

Vue.use(Vuex)
Vue.use(VueLocalStorage)

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
    ],
    car: ''
    // theme: 'themeone'
  },
  mutations: {
    changetheme (state, themetype) {
      state.theme.themetype = themetype
    },
    setCar (state, cardata) {
      state.car = cardata
      Vue.localStorage.set('car', JSON.stringify(this.state.car))
    }
  },
  actions: {
    changetheme (context, themetype) {
      return new Promise(function (resolve, reject) {
        context.commit('changetheme', themetype)
        resolve()
      })
    },
    setCar (context, cardata) {
      return new Promise(function (resolve, reject) {
        context.commit('setCar', cardata)
        resolve()
      })
    }
  },
  getters: {
    gettheme: state => {
      return state.theme
    },
    getCar: state => {
      return state.car
    }
  }
})

export default store
