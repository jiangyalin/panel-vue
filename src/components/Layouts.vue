<template>
  <section tag="div" class="g-mn">
    <ul class="m-lst">
      <li class="m-li" v-for="nav in nav">
        <a class="m-a" :href="nav.url">{{ nav.text }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        nav: [{
          text: '导航1',
          url: 'javascript:void(0)'
        }, {
          text: '导航2',
          url: 'javascript:void(0)'
        }, {
          text: '导航3',
          url: 'javascript:void(0)'
        }, {
          text: '导航4',
          url: 'javascript:void(0)'
        }, {
          text: '导航5',
          url: 'javascript:void(0)'
        }, {
          text: '导航6',
          url: 'javascript:void(0)'
        }, {
          text: '导航7',
          url: 'javascript:void(0)'
        }]
      }
    }
  }
</script>

<style>
  @import "../common/style/layouts.less";
</style>
