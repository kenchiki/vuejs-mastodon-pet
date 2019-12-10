<template>
  <div class="home">
    <div class="form-group mt-5">
      <label for="mastodon_url" class="col-form-label">Mastodon URL:</label>
      <input type="text" v-model="mastodon_url" class="form-control" id="mastodon_url" placeholder="https://gingadon.com">
    </div>

    <div class="form-group">
      <input type="button" value="アカウント追加" v-on:click="loginAccount" class="form-control btn btn-danger">
    </div>

    <div class="form-group">
      <div>{{ counter}}</div>
      <input type="button" value="カウントを5増やす" v-on:click="addCount" class="form-control btn btn-danger">
      <input type="button" value="カウントを1減らす" v-on:click="addCount2" class="form-control btn btn-danger">
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import Account from "@/store/Account";
import { getModule } from 'vuex-module-decorators';

// name: "login",
//コンポーネントじゃなくても@Componentをつけないとcreatedなどが認識しなかった
@Component
export default class Login extends Vue {
  // data: function () {
  //   return {
  //     mastodon_url: this.initURL(),
  //     testdayo: process.env
  //   }
  // },
  mastodon_url: string = this.initURL();

  created() {
    console.log('created')
  }

  get counter() {
    return this.account().count;
  }

  loginAccount():void{
    this.account().incr();
  }

  addCount():void{
    //actionを呼びだす
    this.account().incr();
  }

  addCount2():void{
    //mutationを呼びだす
    this.account().decrement(1);
  }

  account():Account {
    return getModule(Account, this.$store);
  }

  // methods: {
  //   initURL(): void {
  //     if(process.env.NODE_ENV === 'development') {
  //       return 'http://localhost:3000/';
  //     }
  //     return '';
  //   }
  // }
  private initURL():string{
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3000/';
    }
    return '';
  }
}
</script>
