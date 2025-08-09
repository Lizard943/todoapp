<template lang="">
  <button
    class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    onclick="document.getElementById('myDialog').showModal()"
  >
    <Icon icon="mdi:plus-circle" class="" />
  </button>

  <!-- Modal -->
  <dialog id="myDialog" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Add daily task</h3>

      <form class="space-y-3 mt-4" method="dialog" @submit="handleSubmit">
        <div>
          <label class="label">
            <span class="label-text">Title</span>
          </label>
          <input
            type="text"
            v-model="task.title"
            placeholder="Your task title"
            class="input input-bordered w-full"
          />
        </div>
        <div class="grid grid-cols-2 space-x-5">
          <div>
            <label class="label">
              <span class="label-text">Time</span>
            </label>
            <input v-model="task.time" type="time" class="input" />
          </div>

          <div>
            <label class="label">
              <span class="label-text">Tag</span>
            </label>
            <input v-model="task.tag" type="text" class="input" />
          </div>
        </div>

        <div class="modal-action">
          <button class="btn">Cancel</button>
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import type { TaskItem } from '@/types/dailytaskitem.type'
import { defineEmits } from 'vue'
const task = reactive<TaskItem>({
  id: '23',
  groupId: 'group-1',
  tag: '',
  time: '',
  title: '',
  statusByDate: {},
})
const emit = defineEmits(['updated'])
async function handleSubmit() {
  try {
    console.log(task)
    const res = await axios.post('http://localhost:3000/api/daily-task/create', task)
    console.log('Server response:', res.data)
    emit('updated')
  } catch {
    console.log('lỗi')
  }
}
</script>
