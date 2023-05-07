<template>
  <!-- Put this part before </body> tag -->
  <input id="my-modal" type="checkbox" class="modal-toggle" />
  <label htmlFor="my-modal" class="cursor-pointer modal">
    <label class="relative modal-box" htmlFor="">
      <h3 class="text-lg font-bold">
        {{ title }}
      </h3>
      <p class="py-4">
        <slot></slot>
      </p>
      <slot name="footer"></slot>
      <div className="modal-action">
        <label htmlFor="my-modal" class="btn btn-secondary" @click="$emit('submit')"> Save </label>
      </div>
    </label>
  </label>
</template>
<script>
  export default {
    name: 'BaseModal',
    props: {
      title: {
        type: String,
        required: true,
        default: '',
      },
    },
    emits: ['submit'],
    data() {
      return {}
    },
    methods: {
      handleSubmit: () => console.log('abc'),
    },
  }
</script>
