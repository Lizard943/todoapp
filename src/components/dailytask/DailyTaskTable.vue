<template lang="">
  <div
    class="relative mt-5 w-full h-fit bg-white rounded-md text-[14px] sm:text-[16px] overflow-auto outline outline-4 outline-white -outline-offset-4"
  >
    <table class="table-auto text-left border-collapse">
      <thead>
        <tr class="text-gray-500">
          <th class="border border-gray-300 px-4 py-2 text-center w-2">#</th>
          <th class="border border-gray-300 px-4 py-2 text-center w-2">Time</th>
          <th class="border border-gray-300 px-4 py-2 w-full"></th>
          <th class="border border-gray-300 px-4 py-2 text-center">Tag</th>
          <th
            v-for="(day, index) in getLastNDatesWithWeekday(4).slice().reverse()"
            :key="index"
            class="border border-gray-300 px-4 py-2 text-center"
          >
            <p class="whitespace-nowrap">{{ day.weekday }}</p>
            <p class="">{{ day.date.split('-')[2] }}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <DailyTaskTableItem
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          @open-modal="openModal(task)"
        />

        <!-- Add more rows as needed -->
      </tbody>
    </table>
    <DailyTaskItemModel ref="modalRef" :selectedItem="selectedItem" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DailyTaskTableItem from '@/components/dailytask/DailyTaskTableItem.vue'
import DailyTaskItemModel from './DailyTaskItemModel.vue'
import DailyTaskSection from '@/components/dailytask/DailyTaskSection.vue'
import getLastNDatesWithWeekday from '@/utils/getLastDay'

defineProps({
  tasks: Array,
})

const modalRef = ref()
const selectedItem = ref(null)

function openModal(item) {
  selectedItem.value = { ...item } // clone tránh thay đổi gốc trực tiếp
  modalRef.value?.open()
}
</script>
