<!-- MyModal.vue -->
<template>
  <dialog id="myDialog" ref="dialogRef" class="modal">
    <div class="modal-box md:w-2/3 md:max-w-[800px] h-[600px] w-full max-w-none overflow-scroll">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-bold text-lg">{{ selectedItem?.title }}</h3>
        <div class="flex flex-row justify-center gap-3">
          <div class="dropdown dropdown-center">
            <div tabindex="0" role="button" class="">
              <Icon icon="mdi:trash-outline" class="size-7 text-red-500" />
            </div>
            <button
              tabindex="0"
              @click="handleDelete"
              class="dropdown-content select-none bg-red-100 rounded-box z-1 w-auto p-2 mt-1 text-sm shadow-sm whitespace-nowrap active:bg-red-200"
            >
              Nhấn để xoá
            </button>
          </div>
          <form method="dialog">
            <button>
              <Icon icon="mdi:close" class="size-7" />
            </button>
          </form>
        </div>
      </div>
      <div class="mt-5">
        <StreakInfo :statusList="selectedItem?.statusByDate" />
        <input
          type="text"
          class="mt-5 px-3 py-2 border border-gray-500 rounded-md text-gray-600 w-full"
          :value="selectedItem?.title"
        />
        <div class="grid grid-cols-2 gap-2 mt-2">
          <input
            type="text"
            class="px-3 py-2 border border-gray-500 rounded-md text-gray-600 w-full"
            :value="selectedItem?.tag"
          />
          <input
            type="time"
            class="px-3 py-2 border border-gray-500 rounded-md text-gray-600 w-full"
            :value="selectedItem?.time"
          />
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import StreakInfo from './modal/StreakInfo.vue'
import { ref } from 'vue'

import axios from 'axios'

const prop = defineProps({
  selectedItem: Object,
})

const dialogRef = ref()

function open() {
  dialogRef.value?.showModal()
}

async function handleDelete() {
  try {
    const res = await axios.delete(
      `http://localhost:3000/api/daily-task/delete/${prop.selectedItem?._id}`,
    )
    console.log('Server response:', res.data)
  } catch {
    console.log('lỗi')
  } finally {
    dialogRef.value?.close()
  }
}

defineExpose({
  open, // Expose cho component cha gọi được
})
</script>
