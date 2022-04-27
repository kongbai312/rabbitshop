import { createStore } from 'vuex'
import modules from './modules'
export default createStore({
  state: {
    name: '张三'
  },
  mutations: {
    changeName (state) {
      state.name = '李四'
    },
    changeName2 (state, newName) {
      state.name = newName
    }

  },
  actions: {
    getName ({ commit }) {
      setTimeout(() => {
        commit('changeName')
      }, 1000)
    },
    getName2 ({ commit }, newName) {
      setTimeout(() => {
        commit('changeName2', newName)
      }, 1000)
    }
  },
  modules,
  getters: {
    name: state => state.name
  }
})
