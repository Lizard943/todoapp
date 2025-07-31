import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = (id: string) =>
  defineStore(`taskStore${id}`, () => {
    const tab = ref<string>('tab1')

    return {
      tab,
    }
  })
