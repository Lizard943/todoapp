<template lang="">
  <div class="grid grid-cols-2 gap-5 px-5 pt-5 font-monaSan">
    <div class="h-36 flex flex-col justify-between lg:col-span-1 col-span-2">
      <SearchBar />
      <div class="flex flex-row items-center justify-between gap-x-5">
        <h2 class="text-3xl font-semibold">My Tasks</h2>
        <div class="flex flex-row gap-x-5">
          <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Project</button>
          <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Add Task</button>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex h-36">
      <StatusBar />
    </div>
    <div class="bg-white rounded-md lg:col-span-1 col-span-2">
      <TabBar />
    </div>
    <div class="flex-row items-center justify-between gap-x-5 hidden lg:flex">
      <h2 class="text-3xl font-semibold">Important Tasks</h2>
      <div class="flex flex-row gap-x-5">
        <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Project</button>
        <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Add Task</button>
      </div>
    </div>

    <TaskMenu :tasks="tasks1" tasksId="1" />
    <div class="flex-row items-center justify-between gap-x-5 flex lg:hidden col-span-2">
      <h2 class="text-3xl font-semibold">Important Tasks</h2>
      <div class="flex flex-row gap-x-5">
        <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Project</button>
        <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Add Task</button>
      </div>
    </div>
    <TaskMenu :tasks="tasks2" tasksId="2" />
  </div>
</template>
<script setup lang="ts">
import SearchBar from '@/components/mytask/SearchBar.vue'
import StatusBar from '@/components/mytask/StatusBar.vue'
import TabBar from '@/components/mytask/TabBar.vue'
import TaskMenu from '@/components/mytask/TaskMenu.vue'

const tasks1 = [
  {
    id: '1',
    title: 'Record tutorial video on Vue 3',
    date: 'Aug 5, 2025',
    time: '13:00 - 14:30',
    checked: true,
  },
  {
    id: '2',
    title: 'Client call: Project kickoff',
    date: 'Aug 6, 2025',
    time: '09:00 - 10:00',
    checked: false,
  },
  {
    id: '3',
    title: 'Brainstorm marketing ideas',
    date: 'Aug 7, 2025',
    time: '15:30 - 16:30',
    checked: true,
  },
]

const tasks2 = [
  {
    id: '1',
    title: 'Create new landing page',
    time: '08:00 - 09:00',
    checked: false,
  },
  {
    id: '2',
    title: 'Design homepage banner',
    time: '10:00 - 11:30',
    checked: true,
  },
  {
    id: '3',
    title: 'Team meeting: Sprint Planning',
    date: 'Jul 31, 2025',
    time: '14:00 - 15:00',
    checked: false,
  },
  {
    id: '4',
    title: 'Review user feedback report',
    date: 'Aug 1, 2025',
    time: '09:00 - 10:00',
    checked: true,
  },
]
</script>
