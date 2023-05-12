import { TaskItem } from '@/utils/types'
import { defineStore } from 'pinia'
export type RootState = {
  tasks: TaskItem[]
  name: string
  loading: boolean
}
export const useTaskStore = defineStore('taskStore', {
  state: () =>
    ({
      tasks: [],
      name: 'QuangKhai',
      loading: false,
    } as RootState),
  getters: {
    taskCompletedList(): TaskItem[] {
      return this.tasks.filter(t => t.isCompleted)
    },
    taskFavList(): TaskItem[] {
      return this.tasks.filter(t => t.isFav)
    },
  },
  actions: {
    async getTasks() {
      this.loading = true
      const response = await fetch('http://localhost:3000/task')
      const data = await response.json()

      this.tasks = data
      this.loading = false
    },
    async addTask(task: Omit<TaskItem, 'isFav' | 'id'>) {
      const rs: TaskItem = {
        ...task,
        id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
        isFav: false,
      }
      this.tasks.push(rs)
      const res = await fetch('http://localhost:3000/task', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        console.log('Eroor')
      }
    },
    toggleFav(taskId: number) {
      const findIdx = this.tasks.findIndex(task => task.id === taskId)
      if (findIdx < 0) return
      this.tasks[findIdx].isFav = !this.tasks[findIdx].isFav
    },
    toggleCompleted(taskId: number) {
      const findIdx = this.tasks.findIndex(task => task.id === taskId)
      if (findIdx < 0) return
      this.tasks[findIdx].isCompleted = !this.tasks[findIdx].isCompleted
    },
    async deleteTask(taskId: number) {
      const findIdx = this.tasks.findIndex(task => task.id === taskId)
      if (findIdx < 0) return
      this.tasks.splice(findIdx, 1)

      const res = await fetch(`http://localhost:3000/task/${taskId}`, {
        method: 'DELETE',
      })

      if (!res.ok) {
        console.log('Eroor')
      }
    },
  },
})
