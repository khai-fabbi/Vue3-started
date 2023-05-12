<template>
  <modal-base title="Create Task" modal-id="modal-task-id">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input
        v-model="formValue.name"
        type="text"
        placeholder="Enter your name task"
        class="w-full input input-primary"
      />
    </div>
    <div class="w-1/2 mt-5 form-control">
      <label class="cursor-pointer label">
        <span class="label-text">Completed :</span>
        <input v-model="formValue.isCompleted" type="checkbox" class="checkbox checkbox-success" />
      </label>
    </div>

    <template #footer>
      <label htmlFor="modal-task-id" class="btn btn-ghost"> Cancel </label>
      <label htmlFor="modal-task-id" class="btn btn-secondary" @click="onSubmit"> Save </label>
    </template>
  </modal-base>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import ModalBase from './ModalBase.vue'
  const emit = defineEmits(['submit'])

  const initialState = {
    name: '',
    isCompleted: false,
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
