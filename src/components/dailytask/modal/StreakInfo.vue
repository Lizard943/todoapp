<template lang="">
  <div class="w-full bg-gray-100 pb-6">
    <div class="grid grid-cols-5 w-full h-56 justify-center items-center px-12">
      <div class="mx-auto col-span-2">
        <div
          class="radial-progress text-orange-600 outline outline-gray-300 outline-[16px] -outline-offset-[16px]"
          :style="`--value: ${percent}; --size: 10rem`"
          aria-valuenow="70"
          role="progressbar"
        >
          {{ percent.toFixed(2) }}%
        </div>
      </div>
      <div class="col-span-3 flex flex-col gap-y-7 text-center">
        <article>
          <h3 class="text-2xl">{{ daySteak }}</h3>
          <p class="text-gray-500">days streak</p>
        </article>
        <article>
          <h3 class="text-2xl">{{ day.count + ' / ' + day.daysInMonth }}</h3>
          <p class="text-gray-500">completed days in month</p>
        </article>
      </div>
    </div>
    <div class="grid grid-cols-7 px-16">
      <div
        v-for="(n, index) in ['M', 'T', 'W', 'T', 'F', 'S', 'S']"
        :key="index"
        class="radial-progress text-orange-600 mx-auto outline outline-gray-300 outline-[6px] -outline-offset-[6px]"
        :style="`--value: ${weekdays[index]}; --size:3rem`"
        aria-valuenow="70"
        role="progressbar"
      >
        {{ n }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import taskInfo from '@/utils/taskInfo'

const prop = defineProps({
  statusList: Object,
})
const daySteak = ref(0)
const day = ref({})
const weekdays = ref([])
const percent = computed(() => {
  return (day.value.count * 100) / day.value.daysInMonth
})
watch(
  () => prop.statusList,
  (newVal) => {
    daySteak.value = taskInfo.countWeekDayStreak(newVal)
    day.value = taskInfo.countCompletedDaysInMonth(newVal)
    weekdays.value = taskInfo.getWeekDay(newVal)
  },
)
</script>
