import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('./views/Settings.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('./views/Watch.vue')
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      debugger
      if (to.name === 'home') {
        return {
          selector: '.home-videos-container',
          offset: savedPosition
        }
      }
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
