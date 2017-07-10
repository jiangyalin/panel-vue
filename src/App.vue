<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue'
  export default {
    name: 'app',
    data () {
      return {
        title: 'p'
      }
    },
    methods: {
    },
    components: {
      Header
    }
  }
</script>

<style>
  @import "common/style/public/public.less";
  html{
    height: 100%;
  }
  body{
    height: 100%;
  }
  .app {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  p{
    width: 100px;
    height: 100px;
    border: 1px solid #3a33d1;
  }
</style>
