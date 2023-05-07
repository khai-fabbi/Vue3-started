import { createRouter, createWebHistory } from 'vue-router'
import MainLayoutVue from '@/layouts/MainLayout.vue'
const routes = [
  {
    path: '/',
    component: MainLayoutVue,
    requiresAuth: true,
    children: [
      {
        path: '/',
        name: 'home-page',
        component: () => import('@/pages/Home.vue'),
        meta: {
          requiresAuth: true,
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
          requiresAuth: true,
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
          requiresAuth: true,
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

router.beforeEach(async () => {
  // check auth
})

export default router
