<!-- MyModal.vue -->
<template>
  <dialog ref="dialogRef" class="modal">
    <div class="modal-box w-[800px] max-w-none h-[600px]">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-bold text-lg">{{ selectedItem?.title }}</h3>
        <form method="dialog">
          <button>
            <Icon icon="mdi:close" class="size-5" />
          </button>
        </form>
      </div>

      <p class="py-4">Đây là nội dung modal</p>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialogRef = ref()

function open() {
  dialogRef.value?.showModal()
}
defineProps({
  selectedItem: Object,
})
defineExpose({
  open, // Expose cho component cha gọi được
})
</script>
