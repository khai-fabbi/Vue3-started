<template>
  <nav class="navbar bg-[#fafafa] max-w-6xl px-5 mx-auto">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div class="flex-1">
      <router-link to="/" class="text-xl normal-case btn btn-ghost">VueJS 3</router-link>
    </div>
    <div class="flex-none">
      <ul class="px-1 menu menu-horizontal">
        <li>
          <router-link class="font-bold capitalize" to="/dashboard">Dashboard</router-link>
        </li>
        <li tabindex="0" class="font-bold">
          <a>
            Parent Menu
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li>
              <router-link class="font-bold capitalize" to="/user">User</router-link>
            </li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li>
          <router-link class="font-bold capitalize" to="/about">About</router-link>
        </li>
        <label v-if="!authStore.isLoggedIn" class="btn btn-info" for="modal-login-id">Sign-In</label>
        <div v-else class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                src="https://plus.unsplash.com/premium_photo-1666264200738-6235d12994ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </label>
          <ul tabindex="0" class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>
  <modal-login @submit="handleLogin" />
</template>
<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'
  import ModalLogin from './modal/ModalLogin.vue'
  import { loginUserFn } from '@/api/authApi'
  import Cookies from 'js-cookie'
  import { getMeFn } from '@/api/authApi'
  const authStore = useAuthStore()
  const handleLogin = async (formValue: { email: string; password: string }) => {
    try {
      const res = await loginUserFn(formValue)
      if (res.data) {
        Cookies.set('access_token', res.data.access)
        Cookies.set('refresh_token', res.data.refresh)
        const response = await getMeFn()
        const user = response.data
        if (user) {
          authStore.setIsLoggedIn(true)
          authStore.setInfo(user)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
</script>
