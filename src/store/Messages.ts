import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import Vue from 'vue'
import axios from 'axios'
import Account from '@/store/Account'

@Module({ name: 'Messages', namespaced: true, stateFactory: true })
export default class Messages extends VuexModule {
  get getTest (): string {
    return this.account.getTest
  }

  get account (): Account {
    return getModule(Account, Vue.prototype.$store)
  }
}
