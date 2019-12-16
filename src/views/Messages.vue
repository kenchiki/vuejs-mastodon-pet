<template>
  <div class="messages">
    <p>afds</p>
    <p>s{{ counter }}</p>
<!--    <ul class="timeline__list" v-if="statuses.length">-->
<!--      <li v-for="status in statuses" v-bind:key="status.id" class="timeline__status">-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import Account from '@/store/Account'
import Messages from '@/store/Messages'
import { getModule } from 'vuex-module-decorators'

@Component
export default class Login extends Vue {
  created () {
    console.log('created')
  }

  get counter (): string {
    return this.messages().getTest
  }

  account (): Account {
    return getModule(Account, this.$store)
  }

  messages (): Messages {
    return getModule(Messages, this.$store)
  }
}
</script>
