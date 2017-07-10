<template>
  <div class="app">
    <p class="j-box" v-on:click="box">1111111111</p>
    <p class="j-box" v-on:click="box1">22222222222</p>
    <router-link to="/">33333333333333</router-link>
    <p>4444444444444444</p>
    <router-view></router-view>
    <box></box>
  </div>
</template>

<script>
  import Box from './components/Box.vue'
  export default {
    name: 'app',
    data () {
      return {
        title: 'p'
      }
    },
    methods: {
      box: function () {
        console.log('ppppp')
        this.$router.push({ path: '/' })
      },
      box1: function () {
        console.log('kkkkkkk')
        this.$router.push({ path: '/box' })
      }
    },
    components: {
      Box
    }
  }
</script>

<style>
  @import "./common/style/public.less";
  html{
    height: 100%;
  }
  body{
    height: 100%;
  }
  .app {
    width: 100%;
    height: 100%;
  }
  p{
    width: 100px;
    height: 100px;
    border: 1px solid #3a33d1;
  }
</style>
