<template>
  <button class="btn btn-primary" @click="onClickButton">Click me</button>
  <!-- The button to open modal -->
  <label for="my-modal" class="btn btn-info">Open Modal</label>
  <Teleport to="body">
    <modal-base title="Learning Vuejs" @submit="handleSubmitModal">
      <p>Test Modal</p>
      <template #footer>
        <footer className="text-sm font-bold italic">Foooter</footer>
      </template>
    </modal-base>
  </Teleport>
  <quiz-form />

  <div class="mt-10">
    <user-page v-if="isShowUser" />
    <h3 v-else>No User</h3>
  </div>
</template>
<script>
  import Modal from '@/components/Modal.vue'
  import QuizForm from '@/components/QuizForm.vue'
  import User from './User.vue'
  import { ref } from 'vue'
  export default {
    name: 'HomePage',
    components: {
      ModalBase: Modal,
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
