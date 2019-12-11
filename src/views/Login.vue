<template>
  <div class="home">
    <div class="form-group mt-5">
      <label for="mastodon_url" class="col-form-label">Mastodon URL:</label>
      <input type="text" v-model="mastodonUrl" class="form-control" id="mastodon_url" placeholder="https://gingadon.com">
    </div>

    <div class="form-group">
      <input type="button" value="アカウント追加" v-on:click="login" class="form-control btn btn-danger">
    </div>

    <div class="form-group">
      <div>{{ count }}</div>
      <input type="button" value="カウントを5増やす" v-on:click="addCount" class="form-control btn btn-danger">
      <input type="button" value="カウントを1減らす" v-on:click="addCount2" class="form-control btn btn-danger">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import Account from '@/store/Account'
import Counter from '@/store/Counter'
import { getModule } from 'vuex-module-decorators'

// name: "login",
// コンポーネントじゃなくても@Componentをつけないとcreatedなどが認識しなかった
@Component
export default class Login extends Vue {
  // data: function () {
  //   return {
  //     mastodon_url: this.initURL(),
  //     testdayo: process.env
  //   }
  // },
  mastodonUrl: string = Login.INIT_URL();

  created () {
    console.log('created')
  }

  get count () {
    return this.counter().count
  }

  async login (): Promise<any> {
    await this.account().login(this.mastodonUrl)
  }

  addCount (): void {
    // actionを呼びだす
    this.counter().incr()
  }

  addCount2 (): void {
    // mutationを呼びだす
    this.counter().decrement(1)
  }

  account (): Account {
    return getModule(Account, this.$store)
  }

  counter (): Counter {
    return getModule(Counter, this.$store)
  }

  // methods: {
  //   initURL(): void {
  //     if(process.env.NODE_ENV === 'development') {
  //       return 'http://localhost:3000/';
  //     }
  //     return '';
  //   }
  // }
  static INIT_URL (): string {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3000'
    }
    return 'https://gingadon.com'
  }
}
</script>
