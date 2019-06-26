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
    },
    {
      path: '/awards',
      name: 'awards',
      component: () => import('./views/Awards.vue')
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import('./views/Certificates.vue')
    },
    {
      path: '/conferences',
      name: 'conferences',
      component: () => import('./views/Conferences.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('./views/Courses.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('./views/Education.vue')
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: () => import('./views/Volunteer.vue')
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('./views/Publications.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/references',
      name: 'references',
      component: () => import('./views/References.vue')
    }
  ]
})
