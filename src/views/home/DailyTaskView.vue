<template lang="">
  <div class="px-5 pt-5 font-monaSan">
    <SearchBar />
    <div class="mt-5 flex flex-col gap-2">
      <h2 class="text-2xl font-semibold">Daily Tasks</h2>
      <div class="flex flex-row justify-between items-center">
        <p class="text-gray-500">Manage your daily tasks efficiently</p>
        <DailyTaskCreateItem />
      </div>
    </div>
    <DailyTaskTable :tasks="tasks" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import axios from 'axios'
import SearchBar from '@/components/mytask/SearchBar.vue'
import DailyTaskTable from '@/components/dailytask/DailyTaskTable.vue'
import DailyTaskCreateItem from '@/components/dailytask/DailyTaskCreateItem.vue'

const tasks = ref(null)
const error = ref('')
onMounted(() => {
  fetchData()
})
onUpdated(() => {
  fetchData()
})
const fetchData = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/daily-task/group-1')
    tasks.value = res.data
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
  }
}
</script>
