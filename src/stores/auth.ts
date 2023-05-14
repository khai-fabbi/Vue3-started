import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
interface User {
  id: string
  email: string
  name: string | null
  avatar: string
}
export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const info = ref<User | null>(null)

  const setInfo = (user: User) => {
    info.value = user
  }

  const setIsLoggedIn = (value: boolean) => {
    isLoggedIn.value = value
  }

  return {
    isLoggedIn,
    info,
    setInfo,
    setIsLoggedIn,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
