<template lang="">
  <article
    class="flex flex-row space-x-4 h-auto w-full p-4 rounded-md border border-1 border-gray-300"
  >
    <input
      type="checkbox"
      :checked="task.checked"
      class="peer checkbox border-gray-600 bg-white checked:border-purple-800 checked:bg-purple-700 checked:text-white"
    />
    <section class="space-y-1 font-medium w-full peer-checked:line-through">
      <h3 class="">{{ task.title }}</h3>
      <div v-if="task.date" class="flex items-center gap-1">
        <Icon icon="mdi:clock-outline" class="size-4 text-gray-400" />
        <p class="text-sm text-gray-400">{{ task.date }}</p>
      </div>
      <p class="text-sm text-gray-400">{{ task.time }}</p>
      <div class="badge bg-purple-200 text-purple-700 rounded-full border-none font-normal">
        <Icon icon="mdi:circle" class="size-4" />
        Primary
      </div>
    </section>
    <div class="flex flex-row space-x-2">
      <Icon icon="mdi:edit-outline" class="size-6" />
      <Icon icon="mdi:edit-outline" class="size-6" />
      <Icon icon="mdi:edit-outline" class="size-6" />
    </div>
  </article>
</template>
<script setup lang="ts">
defineProps({
  task: Object,
})
</script>
