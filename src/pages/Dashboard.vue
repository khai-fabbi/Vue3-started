<template>
  <div>
    <h2 class="text-2xl font-semibold text-center text-primary">Dashboard Page</h2>
    <div class="my-5">
      <p>
        Xin chao,
        <span class="italic font-semibold text-black">{{ taskStore.name }}</span>
      </p>
      <ul class="mt-4">
        <li v-for="task in taskStore.tasks" :key="task.id">
          <task-detail :task="task" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TaskDetail from '@/modules/about/TaskDetail.vue'
  import { useTaskStore } from '@/stores/taskStore'

  const taskStore = useTaskStore()
  console.log(taskStore)
</script>
