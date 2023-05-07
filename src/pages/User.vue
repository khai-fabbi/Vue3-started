<template>
  <h3 class="text-3xl font-semibold text-center">User Page</h3>

  <ul v-if="userList.length > 0">
    <li v-for="{ id, name, role } in userList" :key="id">
      <router-link
        class="transition-all cursor-pointer hover:text-red-500"
        :to="{
          name: 'user-detail',
          params: {
            id,
          },
        }"
      >
        {{ `${id} - ${name} - ${role}` }}
      </router-link>
    </li>
  </ul>
  <p v-if="error" class="text-red-500">{{ error }}</p>
</template>
<script>
  import { onMounted, ref } from 'vue'
  export default {
    name: 'UserPage',
    setup() {
      const userList = ref([])
      const error = ref(null)

      const fetchData = async () => {
        try {
          const response = await fetch('https://api.escuelajs.co/api/v1/users')
          if (!response.ok) throw new Error('Something went wrong.')
          userList.value = await response.json()
        } catch (err) {
          error.value = err
          console.log(error.value)
        }
      }
      onMounted(() => {
        fetchData()
      })
      return { userList, error }
    },
  }
</script>
