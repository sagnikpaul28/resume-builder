import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./views/Editor.vue')
    },
    {
      path: '/basics',
      name: 'basics',
      component: () => import('./views/Basics.vue')
    },
    {
      path: '/config',
      name: 'config',
      component: () => import('./views/Config.vue')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('./views/Header.vue')
    },
    {
      path: '/social-media',
      name: 'social-media',
      component: () => import('./views/SocialMedia.vue')
    }
  ]
})
