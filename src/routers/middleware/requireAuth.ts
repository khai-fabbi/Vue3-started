import { getMeFn } from '@/api/authApi'
import type { NavigationGuardNext } from 'vue-router'

export default async function requireAuth({ next, authStore }: { next: NavigationGuardNext; authStore: any }) {
  // try {
  //   const response = await getMeFn()
  //   const user = response.data
  //   authStore.setIsLoggedIn(true)
  //   authStore.setInfo(user)

  //   if (!user) {
  //     return next({
  //       name: 'login',
  //     })
  //   }
  // } catch (error) {
  //   document.location.href = '/login'
  // }

  return next()
}
