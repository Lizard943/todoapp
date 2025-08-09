import DailyTaskView from '@/views/home/DailyTaskView.vue'
import MyTaskView from '@/views/home/MyTaskView.vue'
import ProjectsView from '@/views/home/ProjectsView.vue'
import HomeView from '@/views/HomeView.vue'
import LandingView from '@/views/LandingView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/home',
      name: 'home',
      meta: { requireAuth: true },
      component: HomeView,
      children: [
        {
          path: '',
          name: '',
          component: MyTaskView,
        },
        {
          path: 'daily',
          name: 'Daily',
          component: DailyTaskView,
        },
        {
          path: 'project',
          name: 'Project',
          component: ProjectsView,
        },
      ],
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })
}
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert('you dont have access')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
