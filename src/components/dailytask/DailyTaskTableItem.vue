<template lang="">
  <tr>
    <td class="border border-gray-300 px-4 py-2">
      <input
        type="checkbox"
        :checked="isChecked"
        @change="onChange"
        class="checkbox border-gray-600 bg-white checked:border-purple-800 checked:bg-purple-700 checked:text-white"
      />
    </td>
    <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">{{ task.time }}</td>
    <td
      @click="$emit('openModal', task)"
      class="cursor-pointer border border-gray-300 px-4 py-2 whitespace-nowrap"
    >
      {{ task.title }}
    </td>
    <td class="border border-gray-300 px-4 py-2">
      <div class="badge badge-success">{{ task.tag }}</div>
    </td>
    <td
      v-for="day in getLastNDatesWithWeekday(4).slice().reverse()"
      :key="day.date"
      class="border border-gray-300 px-4 py-2 text-center"
    >
      <div v-if="task.statusByDate[day.date]">✅</div>
      <div v-else>❌</div>
    </td>
  </tr>
</template>
<script setup lang="ts">
import axios from 'axios'
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'
import getLastNDatesWithWeekday from '@/utils/getLastDay'
import dayjs from 'dayjs'

const isUpdating = ref(false)
const today = dayjs().format('YYYY-MM-DD')
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
})

const isChecked = computed((): boolean => {
  return !!props.task.statusByDate[today]
})

const sendStatusUpdate = debounce(
  async (status: boolean) => {
    isUpdating.value = true
    try {
      await axios.patch(`http://localhost:3000/api/daily-task/update-status/${props.task.id}`, {
        date: today,
        status,
      })
      console.log('Update success')
    } catch (err) {
      console.error('Update failed', err)
    } finally {
      isUpdating.value = false
    }
  },
  500,
  { leading: true, trailing: true },
)

function onChange(event) {
  const checked = (event.target as HTMLInputElement).checked
  sendStatusUpdate(checked)
}
</script>
