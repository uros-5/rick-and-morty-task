import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home.vue")
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import("@/views/Gallery.vue")
    }
  ]
})

export default router
