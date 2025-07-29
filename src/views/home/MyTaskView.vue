<template lang="">
  <div class="grid grid-cols-2 gap-5 px-5 pt-5 font-monaSan">
    <div class="h-36 flex flex-col justify-between lg:col-span-1 col-span-2">
      <div
        class="w-1/2 min-w-[250px] bg-white flex flex-row gap-x-5 p-2 items-center rounded-xl shadow-md"
      >
        <Icon icon="mdi:search" class="size-6 ms-2" />
        <input type="text" class="bg-inherit w-full focus:outline-none" />
      </div>
      <div class="flex flex-row items-center justify-between gap-x-5">
        <h2 class="text-3xl font-semibold">My Tasks</h2>
        <div class="flex flex-row gap-x-5">
          <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Project</button>
          <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Add Task</button>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex h-36">
      <div
        class="w-full h-auto bg-white rounded-xl shadow-md flex flex-row justify-between gap-5 px-5 items-center"
        role=""
      >
        <div class="flex flex-col font-semibold text-md">
          <p class="">It's <span class="text-[#92401d]">Thursday, 29 July 2025</span></p>
          <p class="">You're completed 4 out of 7 Daily Tasks</p>
          <p class="text-[#92401d]">Keep going!</p>
        </div>
        <div class="">
          <div
            class="radial-progress text-amber-800 outline outline-gray-200 outline-[16px] -outline-offset-[16px]"
            style="--value: 400/7; --size: 7rem; --thickness: 1rem"
            aria-valuenow="70"
            role="progressbar"
          >
            4/7
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-1 rounded-md lg:col-span-1 col-span-2">
      <div class="flex font-semibold h-full">
        <input type="radio" name="tab" id="tab1" class="hidden peer/tab1" checked />
        <label
          for="tab1"
          class="flex-1 h-full text-center cursor-pointer px-4 py-2 rounded peer-checked/tab1:outline peer-checked/tab1:outline-1 peer-checked/tab1:outline-gray-300 peer-checked/tab1:text-[#92401d] transition"
        >
          Waiting
        </label>

        <input type="radio" name="tab" id="tab2" class="hidden peer/tab2" />
        <label
          for="tab2"
          class="flex-1 h-full text-center cursor-pointer px-4 py-2 rounded peer-checked/tab2:outline peer-checked/tab2:outline-1 peer-checked/tab2:outline-gray-300 peer-checked/tab2:text-[#92401d] transition"
        >
          Completed
        </label>

        <input type="radio" name="tab" id="tab3" class="hidden peer/tab3" />
        <label
          for="tab3"
          class="flex-1 h-full text-center cursor-pointer px-4 py-2 rounded peer-checked/tab3:outline peer-checked/tab3:outline-1 peer-checked/tab3:outline-gray-300 peer-checked/tab3:text-[#92401d] transition"
        >
          All Task
        </label>
      </div>
    </div>
    <div class="flex-row items-center justify-between gap-x-5 hidden lg:flex">
      <h2 class="text-3xl font-semibold">Important Tasks</h2>
      <div class="flex flex-row gap-x-5">
        <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Project</button>
        <button class="bg-gray-500 px-5 py-2 text-white rounded-md">Add Task</button>
      </div>
    </div>

    <div
      class="w-full h-fit min-h-[430px] bg-white rounded-md flex flex-col gap-3 p-3 lg:col-span-1 col-span-2"
    >
      <article
        v-for="i in 5"
        :key="i"
        class="flex flex-row space-x-4 min-h-32 h-auto w-full p-4 rounded-md border border-1 border-gray-300"
      >
        <input
          type="checkbox"
          checked="checked"
          class="peer checkbox border-gray-600 bg-white checked:border-orange-600 checked:bg-orange-500 checked:text-white"
        />
        <section class="space-y-1 font-medium w-full peer-checked:line-through">
          <h3 class="">Create new landing page</h3>
          <div class="flex items-center gap-1">
            <Icon icon="mdi:clock-outline" class="size-4 text-gray-400" />
            <p class="text-sm text-gray-400">Apr 25, 2025</p>
          </div>
          <p class="text-sm text-gray-400">08:00 - 09:00</p>
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
    </div>
    <div class="w-full h-fit min-h-[430px] bg-white rounded-md hidden lg:flex"></div>
  </div>
</template>
<script setup lang="ts"></script>
