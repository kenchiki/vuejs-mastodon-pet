import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'Counter', namespaced: true, stateFactory: true })
export default class Counter extends VuexModule {
  public count: number = 2

  @Mutation
  increment (delta: number) {
    this.count += delta
  }

  @Mutation
  decrement (delta: number) {
    this.count -= delta
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  incr () {
    return 5
  }

  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr () {
    return 5
  }
}
