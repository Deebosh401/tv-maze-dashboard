import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import ResultView from '../views/ResultView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/result',
      name: 'result',
      // route level code-splitting
      // this generates a separate chunk (result.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ResultView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    }
  ]
})
export default router