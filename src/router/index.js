import Vue from 'vue'
import Router from 'vue-router'
import Mono from '@/components/views/Mono'
import Poly from '@/components/views/Poly'
import Drums from '@/components/views/Drums'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mono',
      component: Mono
    },
    {
      path: '/poly',
      name: 'Poly',
      component: Poly
    },
    {
      path: '/drums',
      name: 'Drums',
      component: Drums
    }
  ]
})
