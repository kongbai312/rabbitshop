// 未开启命名空间的模块
export default {
  state: {
    username: 'moduleA'
  },
  mutations: {
    changeName (state) {
      state.username = 'moduleA-mutations-changeName'
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
