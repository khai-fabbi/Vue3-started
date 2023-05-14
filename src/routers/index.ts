import { NavigationGuardNext, RouteLocationNormalized, createRouter, createWebHistory } from 'vue-router'
import MainLayoutVue from '@/layouts/MainLayout.vue'
import requireAuth from './middleware/requireAuth'
import middlewarePipeline from './middlewarePipeline'
import { useAuthStore } from '@/stores/auth'
const routes = [
  {
    path: '/',
    component: MainLayoutVue,
    middleware: [requireAuth],
    children: [
      {
        path: '/',
        name: 'home-page',
        component: () => import('@/pages/Home.vue'),
        meta: {
          middleware: [requireAuth],
          headerTitle: 'Home',
          searchConfig: {},
          storeConfig: {},
        },
      },
      {
        path: 'dashboard',
        name: 'dashboard-page',
        component: () => import('@/pages/Dashboard.vue'),
        meta: {
          middleware: [requireAuth],
          headerTitle: 'Dashboard',
          searchConfig: {},
          storeConfig: {},
        },
      },
      {
        path: 'about',
        name: 'about-page',
        component: () => import('@/pages/About.vue'),
        meta: {
          middleware: [requireAuth],
          headerTitle: 'About',
          searchConfig: {},
          storeConfig: {},
        },
      },
    ],
  },
  {
    path: '/user',
    name: 'user-page',
    component: () => import('@/pages/User.vue'),
  },
  {
    path: '/user/:id',
    name: 'user-detail',
    component: () => import('@/pages/UserDetail.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const authStore = useAuthStore()

  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware as any

  const context = {
    to,
    from,
    next,
    authStore,
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

export default router
