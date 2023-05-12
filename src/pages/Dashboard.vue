<template>
  <div>
    <progress v-if="taskStore.loading" class="w-56 mx-auto progress"></progress>
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

      <div class="flex mt-5">
        <div class="flex-1 btn-group btn-group-vertical lg:btn-group-horizontal">
          <button class="btn" :class="{ 'btn-active': filter === 'all' }" @click="filter = 'all'">All Task</button>
          <button class="btn" :class="{ 'btn-active': filter === 'fav' }" @click="filter = 'fav'">Favorite</button>
          <button class="btn" :class="{ 'btn-active': filter === 'complete' }" @click="filter = 'complete'">
            Complete
          </button>
        </div>
        <div class="flex-1 text-center">
          <label class="btn btn-info" for="modal-task-id">Add new Task</label>
        </div>
      </div>

      <!-- table -->
      <div class="mt-5 overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>complete</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in taskList" :key="task.id">
              <th>{{ task.id }}</th>
              <td>{{ task.title }}</td>
              <td>
                <input
                  type="checkbox"
                  :checked="task.isCompleted"
                  class="checkbox checkbox-success"
                  @click="taskStore.toggleCompleted(task.id)"
                />
              </td>
              <td class="flex items-center gap-3">
                <div class="rating">
                  <input
                    type="radio"
                    name="favorit"
                    class="mask mask-heart"
                    :class="task.isFav ? 'bg-red-500' : 'bg-green-200'"
                    :value="task.isFav"
                    @click="handleChangeFav(task.id)"
                  />
                </div>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-error" @click="() => handleDeleteTask(task.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <modal-task @submit="handleAddTask" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ModalTask from '@/components/modal/ModalTask.vue'
  import TaskDetail from '@/modules/dashboard/TaskDetail.vue'
  import { useTaskStore } from '@/stores/taskStore'
  import { computed, ref } from 'vue'
  const filter = ref('all')
  const taskStore = useTaskStore()
  taskStore.getTasks()
  const taskList = computed(() => {
    const rs =
      filter.value === 'fav'
        ? taskStore.taskFavList
        : filter.value === 'complete'
        ? taskStore.taskCompletedList
        : taskStore.tasks
    return rs
  })
  const handleAddTask = ({ name, isCompleted }: { name: string; isCompleted: boolean }) => {
    const formValue = {
      title: name,
      isCompleted,
    }
    taskStore.addTask(formValue)
  }
  const handleChangeFav = (taskId: number) => {
    taskStore.toggleFav(taskId)
  }
  const handleDeleteTask = taskId => {
    if (confirm('Ban co muon xoa')) taskStore.deleteTask(taskId)
  }
</script>
