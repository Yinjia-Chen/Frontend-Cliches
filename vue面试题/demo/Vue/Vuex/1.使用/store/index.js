import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
export default new Vuex.Store({
  state: {
    str: 'Hello World',
    count: 0,
  },
  getters: {
    changedStr(state) {
      return state.str + 'x'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
    user
  }
})