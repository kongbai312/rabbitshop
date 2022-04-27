// 开启命名空间的模块
export default {
  namespaced: true, // 是否开启命名空间
  state: {
    username: 'moduleB'
  },
  mutations: {
    changeName (state) {
      state.username = 'moduleB-mutations-changeName'
    }
  },
  actions: {
    getName ({ commit }) {
      setTimeout(() => {
        commit('changeName')
      }, 1000)
    }
  },
  getters: {
    username: state => state.username
  }
}
