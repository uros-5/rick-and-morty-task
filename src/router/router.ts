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
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import("@/views/Profile.vue")
    },
  ]
})

export default router
