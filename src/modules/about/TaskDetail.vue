<template>
  <div>
    <p>{{ task.title }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue'

  interface TaskItem {
    id: number
    title: string
    isFav: boolean
  }

  const props = defineProps<{ task: TaskItem }>()
  const { task } = toRefs(props)
</script>
