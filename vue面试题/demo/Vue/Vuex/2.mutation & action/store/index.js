import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  getters: {
  },
  mutations: {
    add(state) {
      state.count++;
    }
  },
  actions: {
    addAfter5Sec({ commit, state }) {
      setTimeout(() => {
        commit('add');
      }, 5000);
    }
  },
  modules: {
  }
})