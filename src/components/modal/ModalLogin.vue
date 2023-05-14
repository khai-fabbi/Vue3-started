<template>
  <modal-base title="Sign In" modal-id="modal-login-id">
    <div class="flex flex-col gap-y-2">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model="formValue.email" type="text" placeholder="email" class="w-full input input-primary" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input v-model="formValue.password" type="password" placeholder="password" class="w-full input input-primary" />
      </div>
    </div>

    <template #footer>
      <label htmlFor="modal-login-id" class="btn btn-ghost"> Cancel </label>
      <label htmlFor="modal-login-id" class="btn btn-secondary" @click="onSubmit"> Save </label>
    </template>
  </modal-base>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import ModalBase from './ModalBase.vue'
  const emit = defineEmits(['submit'])

  const initialState = {
    email: '',
    password: '',
  }
  const formValue = reactive({
    ...initialState,
  })

  const onSubmit = () => {
    emit('submit', formValue)

    // reset form
    Object.assign(formValue, initialState)
  }
</script>
