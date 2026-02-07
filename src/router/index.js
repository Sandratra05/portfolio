import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // Check if coming back from project detail (instant scroll)
      const isInstant = to.query.instant === 'true' || from.path.startsWith('/project/')
      return { el: to.hash, behavior: isInstant ? 'instant' : 'smooth' }
    } else {
      // Instant scroll for project detail pages
      return { top: 0, left: 0, behavior: 'instant' }
    }
  }
})

export default router
