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
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/technical-skills',
      name: 'technical-skills',
      component: () => import('./views/TechnicalSkills.vue')
    },
    {
      path: '/soft-skills',
      name: 'soft-skills',
      component: () => import('./views/SoftSkills.vue')
    },
    {
      path: '/languages',
      name: 'languages',
      component: () => import('./views/Languages.vue')
    },
    {
      path: '/interests',
      name: 'interests',
      component: () => import('./views/Interests.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('./views/Achievements.vue')
    }
  ]
})
