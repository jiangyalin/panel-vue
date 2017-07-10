<template>
  <div class="box">
    <h1>I am another page</h1>
    <a> written by {{ msg }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
  </div>
</template>

<script>
  export default {
    name: 'box',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App 测试'
      }
    }
  }
</script>

<style>

</style>
