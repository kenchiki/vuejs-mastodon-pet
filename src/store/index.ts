import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Account from './Account'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {Account: Account}
});
