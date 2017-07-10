<template>
  <div class="g-header">
    <BtnMenu></BtnMenu>
  </div>
</template>

<script>
  import BtnMenu from '../../components/header/BtnMenu.vue'
  export default {
    name: 'header',
    components: {
      BtnMenu
    }
  }
</script>

<style>
  @import "../../common/style/header/header.less";
</style>
