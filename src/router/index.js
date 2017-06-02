import Vue from 'vue'
import Router from 'vue-router'
import Mono from '@/components/Mono'
import Poly from '@/components/Poly'
import Drums from '@/components/Drums'

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
