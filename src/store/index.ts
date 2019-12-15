import Vue from 'vue'
import Vuex from 'vuex'
import Account from './Account'
import Counter from './Counter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Account: Account,
    Counter: Counter
  }
})
