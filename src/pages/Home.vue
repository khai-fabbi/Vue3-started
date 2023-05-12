<template>
  <button class="btn btn-primary" @click="onClickButton">Click me</button>
  <quiz-form />

  <div class="mt-10">
    <user-page v-if="isShowUser" />
    <h3 v-else>No User</h3>
  </div>
</template>
<script>
  import QuizForm from '@/components/QuizForm.vue'
  import User from './User.vue'
  import { ref } from 'vue'
  export default {
    name: 'HomePage',
    components: {
      QuizForm,
      UserPage: User,
    },

    setup() {
      const isShowUser = ref(false)
      const onClickButton = () => {
        console.log('Click button aa')
      }
      const handleSubmitModal = () => {
        alert('Submit Modal')
      }
      return { isShowUser, onClickButton, handleSubmitModal }
    },
  }
</script>
