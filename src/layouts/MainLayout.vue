<template>
  <main>
    <Header />
    <div class="max-w-6xl p-5 mx-auto">
      <router-view />
    </div>
  </main>
</template>
<script setup lang="ts">
  import Header from '@/components/Header.vue'
</script>
