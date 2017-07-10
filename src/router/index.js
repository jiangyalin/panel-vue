import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/menu/Menu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header
    },
    {
      name: 'b2', path: '/box', component: Header
    }
  ]
})
