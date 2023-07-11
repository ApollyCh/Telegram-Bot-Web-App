import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import FindFreeRoom from '@/views/FindFreeRoom.vue'
import BookTheRoom from '@/views/BookTheRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/findFreeRooms',
      name: 'findFreeRooms',
      component: FindFreeRoom
    },
    {
      path: '/bookTheRoom',
      name: 'bookTheRoom',
      component: BookTheRoom
    }
  ]
})

export default router
