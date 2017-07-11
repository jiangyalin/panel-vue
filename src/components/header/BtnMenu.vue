<template>
  <a class="btn-menu" :class="classObject">
    <i class="fa fa-align-justify"></i>
    <section class="u-project-menu">
      <ul class="u-lst">
        <li class="u-li">
          <div class="u-group">
            <i class="fa fa-check"></i>
            <div class="u-fr">
              <p class="u-tt">这是标题</p>
              <span class="u-tips">这是描述</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="u-new">
        <i class="fa fa-check"></i>
        <p class="u-tt">创建新的项目</p>
      </div>
    </section>
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
    cursor: pointer;
    transition: .15s;
  }
  .btn-menu:hover{
    color: #3da8f5;
  }
  .u-project-menu{
    position: fixed;
    top: 48px;
    left: 8px;
    margin-top: 8px;
    width: 320px;
    color: #808080;
    background-color: #fff;
    box-shadow: 0 7px 21px rgba(0,0,0,0.1);
  }
  .u-project-menu .u-lst{
    border-bottom: 1px solid #e5e5e5;
  }
  .u-project-menu .u-li{
    overflow: auto;
    width: 100%;
    height: 68px;
  }
  .u-project-menu .u-group{
    padding: 16px 12px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: .15s;
  }
  .u-project-menu .u-group:hover{
    background-color: #f5f5f5;
  }
  .u-project-menu .fa{
    float: left;
    width: 26px;
    line-height: 36px;
    text-align: center;
  }
  .u-project-menu .u-fr{
    float: right;
    width: 270px;
  }
  .u-project-menu .u-tt{
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    color: #383838;
  }
  .u-project-menu .u-tips{
    display: block;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
  }
  .u-project-menu .u-new{
    padding: 16px 12px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .u-project-menu .u-new .fa{
    line-height: 20px;
  }
</style>
