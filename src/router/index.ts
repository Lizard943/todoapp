import MyTaskView from '@/views/home/MyTaskView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'mytask',
          name: 'mytask',
          component: MyTaskView,
        },
      ],
    },
  ],
})

export default router
