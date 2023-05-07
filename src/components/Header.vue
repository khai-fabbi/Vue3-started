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
      </ul>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>
