import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Learning Vuejs 3', isFav: true },
      { id: 2, title: 'Learning Pinia', isFav: true },
      { id: 3, title: 'Learning VueQuery', isFav: false },
    ],
    name: 'QuangKhai',
  }),
})
