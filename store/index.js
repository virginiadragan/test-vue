import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    x: 0,
    y: 0,
    numbers: []
  },
  mutations: {
    setX: (state, x) => {
      state.x = x
    },
    setY: (state, y) => {
        state.y = y
    },
    setNumbers (state, data) {
      state.numbers = data
    }
  },
  getters: {
    getResult (state) {
      return state.x + state.y
    },
    getNumbers (state) {
      return state.numbers
    }
  },
  actions: {
    fetchData (context) {
      fetch('http://localhost:3000/numbers')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('setNumbers', data)
        })
    }
  }
})

export default store