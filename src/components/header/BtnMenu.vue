<template>
  <a class="btn-menu" :class="classObject">
    <i class="fa fa-align-justify"></i>
  </a>
</template>

<script>
  export default {
    name: 'btn-menu',
    data () {
      return {
        isActive: true
      }
    },
    methods: {
      box: function () {
        this.$router.push({ path: '/' })
      },
      box1: function () {
        this.$router.push({ path: '/box' })
      }
    },
    computed: {
      classObject: function () {
        return {
          active: this.isActive
        }
      }
    }
  }
</script>

<style>
  .btn-menu{
    display: block;
    width: 48px;
    height: 48px;
    font-size: 18px;
    color: #ccc;
    line-height: 48px;
    text-align: center;
  }
</style>
