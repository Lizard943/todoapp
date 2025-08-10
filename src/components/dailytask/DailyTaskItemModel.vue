<!-- MyModal.vue -->
<template>
  <dialog id="myDialog" ref="dialogRef" class="modal">
    <div class="modal-box w-[800px] max-w-none h-[600px]">
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
      <p class="py-4">Đây là nội dung modal</p>
      <p>{{ selectedItem?._id }}</p>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

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

const prop = defineProps({
  selectedItem: Object,
})
defineExpose({
  open, // Expose cho component cha gọi được
})
</script>
