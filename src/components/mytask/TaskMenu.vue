<template lang="">
  <div
    class="w-full h-fit min-h-[430px] bg-white rounded-md flex flex-col gap-3 p-3 lg:col-span-1 col-span-2"
  >
    <keep-alive>
      <TaskMenuItem v-for="task in filterTasks" :key="task.id" :task="task" />
    </keep-alive>
  </div>
</template>
<script setup lang="ts">
import TaskMenuItem from '@/components/mytask/TaskMenuItem.vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const taskStore = useTaskStore(tasksId)()
const { tab } = storeToRefs(taskStore)

const filterByTab = (task: any) => {
  if (tab.value === 'tab1') return task.checked === false
  if (tab.value === 'tab2') return task.checked === true
  return true
}

const filterTasks = computed(() => tasks?.filter(filterByTab))

const { tasksId, tasks } = defineProps({
  tasksId: {
    type: String,
    default: '',
  },
  tasks: Array,
})
</script>
<style lang=""></style>
