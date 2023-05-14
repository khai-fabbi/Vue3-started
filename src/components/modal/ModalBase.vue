<template>
  <!-- Put this part before </body> tag -->
  <Teleport to="body">
    <input :id="`${modalId}`" type="checkbox" class="modal-toggle" />
    <label :htmlFor="modalId" class="cursor-pointer modal">
      <label class="relative modal-box" htmlFor="">
        <h3 class="text-2xl font-bold text-center">
          {{ title }}
        </h3>
        <p class="py-4">
          <slot></slot>
        </p>
        <div className="modal-action">
          <slot name="footer"></slot>
        </div>
      </label>
    </label>
  </Teleport>
</template>
<script setup lang="ts">
  interface Props {
    title: string
    modalId: string
  }
  defineProps<Props>()
</script>
