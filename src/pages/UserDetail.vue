<template>
  <h3 class="text-3xl font-semibold text-center text-purple-500">User Detail Page</h3>
  <div v-if="userDetail">
    <h2>Name : {{ userDetail.name }}</h2>
    <p>Email : {{ userDetail.email }}</p>
    <p>Role : {{ userDetail.role }}</p>
  </div>
  <div v-else>Loading...</div>
  <p>{{ $route.params }}</p>
</template>
<script>
  export default {
    name: 'UserPage',
    data() {
      return {
        userDetail: null,
      }
    },
    async created() {
      const response = await fetch(`https://api.escuelajs.co/api/v1/users/${this.$route.params.id}`)
      const dataRes = await response.json()
      this.userDetail = dataRes
    },
  }
</script>
