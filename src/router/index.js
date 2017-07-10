import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/components/Layouts.vue'
import Box from '@/components/Box.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layouts',
      component: layouts
    },
    {
      name: 'b2', path: '/box', component: Box
    }
  ]
})
