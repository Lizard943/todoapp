<template lang="">
  <div class="my-4 text-gray-600" role="menu">
    <ul class="w-full p-2 space-y-1">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        @click="
          () => {
            router.push(item.link)
          }
        "
        class="h-10 p-4 bg-inherit hover:bg-white hover:brightness-90 hover:rounded-lg hover:cursor-pointer flex items-center"
      >
        <figure class="flex flex-row gap-5">
          <Icon :icon="item.icon" class="size-6" />
          <p class="">{{ item.label }}</p>
        </figure>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const menuItems = [
  {
    icon: 'mdi:home-outline',
    label: 'Home',
    link: '/home',
  },
  {
    icon: 'mdi:folder-clock-outline',
    label: 'Daily Task',
    link: '/home/daily',
  },
  {
    icon: 'mdi:folder-alert-outline',
    label: 'Important Task',
    link: '/home/project',
  },
  {
    icon: 'mdi:alarm-clock',
    label: 'Reminder',
    link: '/login',
  },
  {
    icon: 'mdi:tag-outline',
    label: 'Tag',
    link: '/login',
  },
]
</script>
