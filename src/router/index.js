import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }

  ]
})
