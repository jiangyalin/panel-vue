// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue模块
import App from './App.vue' // 引入vue组件
import router from './router' // 引入路由配置文件
import './common/icon/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false // 关闭生产模式下个提出的提示

/* eslint-disable no-new */
new Vue({ // 创建一个vue根实例
  el: '#app',  // 绑定id
  router, // 注入路由配置
  template: '<App/>', // 配置根模板
  components: {
    App // 注入组件
  }
})
