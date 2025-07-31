<template lang="">
  <div class="flex font-semibold h-full p-1">
    <input
      type="radio"
      name="tab"
      value="tab1"
      id="tab1"
      v-model="tab"
      class="hidden peer/tab1"
      checked
    />
    <label
      for="tab1"
      class="flex-1 h-full text-center cursor-pointer px-4 py-2 rounded peer-checked/tab1:outline peer-checked/tab1:outline-1 peer-checked/tab1:outline-gray-300 peer-checked/tab1:text-[#92401d] transition"
    >
      Waiting
    </label>

    <input type="radio" name="tab" value="tab2" id="tab2" v-model="tab" class="hidden peer/tab2" />
    <label
      for="tab2"
      class="flex-1 h-full text-center cursor-pointer px-4 py-2 rounded peer-checked/tab2:outline peer-checked/tab2:outline-1 peer-checked/tab2:outline-gray-300 peer-checked/tab2:text-[#92401d] transition"
    >
      Completed
    </label>

    <input type="radio" name="tab" value="tab3" id="tab3" v-model="tab" class="hidden peer/tab3" />
    <label
      for="tab3"
      class="flex-1 h-full text-center cursor-pointer px-4 py-2 rounded peer-checked/tab3:outline peer-checked/tab3:outline-1 peer-checked/tab3:outline-gray-300 peer-checked/tab3:text-[#92401d] transition"
    >
      All Task
    </label>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/task'
const taskStore = useTaskStore('1')()
const { tab } = storeToRefs(taskStore)

watchEffect(() => {
  console.log(tab.value)
})
</script>
