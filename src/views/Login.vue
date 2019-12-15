<template>
  <div class="home">
    <div class="form-group mt-5">
      <label for="mastodon_url" class="col-form-label">Mastodon URL:</label>
      <input type="text" v-model="mastodonUrl" class="form-control" id="mastodon_url" placeholder="https://gingadon.com">
    </div>

    <div class="form-group">
      <input type="button" value="ログイン" v-on:click="login" class="form-control btn btn-danger">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import Account from '@/store/Account'
import { getModule } from 'vuex-module-decorators'

@Component
export default class Login extends Vue {
  static readonly INIT_MASTODON_URL: string = process.env.VUE_APP_MASTODON_ORIGIN
  mastodonUrl: string = Login.INIT_MASTODON_URL

  created () {
    console.log('created')
  }

  async login (): Promise<any> {
    await this.account().login(this.mastodonUrl)
  }

  account (): Account {
    return getModule(Account, this.$store)
  }
}
</script>
