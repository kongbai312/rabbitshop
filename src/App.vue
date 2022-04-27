<template>
  <div>
    App
    <h3>调用vuex中state:{{$store.state.name}}</h3>
    <h3>调用vuex中getters:{{$store.getters.name}}</h3>
    <button @click="changeName">修改名字</button>
    <div>-------------------------</div>
    模块化（未开启命名空间）
    <h3>调用moduleA中的state:{{$store.state.moduleA.username}}</h3>
    <h3>调用vuex中getters:{{$store.getters.username}}</h3>
    <button @click="changeNameModuleA">修改名字moduleA</button>
    <div>-------------------------</div>
    模块化（开启命名空间）
    <h3>调用moduleB中的state:{{$store.state.moduleB.username}}</h3>
    <h3>调用vuex中getters:{{$store.getters['moduleB/username']}}</h3>
    <button @click="changeNameModuleB">修改名字moduleB</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const changeName = () => {
      // 获取state.name
      // alert(store.state.name)
      // 调用mutations
      // store.commit('changeName')
      // 调用mutations(需要参数)
      // store.commit('changeName2','王庆红')
      // 调用actions
      // store.dispatch('getName')
      // 调用actions(需要参数)
      // store.dispatch('getName2','王庆红')
      // 获取getters.name
      // alert(store.getters.name)
    }
    const changeNameModuleA = () => {
      // 获取state.username
      // alert(store.state.moduleA.username)
      // 调用mutations
      // store.commit('changeName')
      // 调用actions
      // store.dispatch('getName')
      // 获取getters.username
      alert(store.getters.username)
    }
    const changeNameModuleB = () => {
      // 获取state.username
      // alert(store.state.moduleB.username)
      // 调用mutations
      // store.commit('moduleB/changeName')
      // 调用actions
      // store.dispatch('moduleB/getName')
      // 获取getters.username
      alert(store.getters['moduleB/username'])
    }
    return { changeName, changeNameModuleA, changeNameModuleB }
  }
}
</script>

<style lang="less" scoped>

</style>
