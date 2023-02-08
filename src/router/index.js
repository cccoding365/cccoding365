import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Navigation from '@/views/Navigation.vue'
import About from '@/views/About.vue'
import Works from '@/views/Works.vue'
import Other from '@/views/Other.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    },
    {
      path: '/xxx',
      name: 'xxx',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
