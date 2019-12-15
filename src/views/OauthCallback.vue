<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import Account from '@/store/Account'
import { getModule } from 'vuex-module-decorators'

@Component
export default class OauthCallback extends Vue {
  async created () {
    await this.account().fetchToken(this.$route.query.code as string)
    await this.$router.push({ name: 'home' })
  }

  account (): Account {
    return getModule(Account, this.$store)
  }
}
</script>
