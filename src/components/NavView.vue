<template lang="">
  <div class="w-[25%] h-screen bg-[#f5f6ef] px-5 font-monaSan font-medium sticky top-0 left-0">
    <div class="h-36 flex justify-center items-center" role="logo">
      <h1 class="text-6xl font-bold text-gray-700 w-auto">
        DOIT<span class="text-[#92401d]">.</span>
      </h1>
    </div>
    <hr class="border-[1px] border-[#c5a86e]" />
    <figure class="flex flex-row gap-2 mt-3 items-center justify-start">
      <img
        src="../assets/luan.png"
        alt=""
        class="mask mask-square rounded-xl size-12 object-cover"
      />
      <section class="flex flex-col w-auto">
        <p class="text-gray-500 brightness-50">Luân Vũ</p>
        <p class="text-gray-500">vuliz943@gmail.com</p>
      </section>
      <div class="size-6">
        <Icon icon="mdi:bell-outline" class="size-6" />
      </div>
    </figure>

    <div class="my-4 bg-inherit text-gray-600" role="menu">
      <ul class="w-full p-2 bg-inherit space-y-1">
        <li
          v-for="i in 5"
          :key="i"
          class="h-10 p-4 bg-inherit hover:brightness-90 hover:rounded-lg hover:cursor-pointer flex items-center"
        >
          <figure class="flex flex-row gap-5">
            <Icon icon="mdi:user-outline" class="size-6" />
            <p class="">Inbox</p>
          </figure>
        </li>
      </ul>
    </div>

    <hr class="border-[1px] border-[#c5a86e]" />

    <div class="">
      <header class="text-[#c5a86e]">OTHER</header>
      <ul class="w-full p-2 bg-inherit space-y-1 text-gray-600">
        <li
          v-for="i in 3"
          :key="i"
          class="h-10 p-4 bg-inherit hover:brightness-90 hover:rounded-lg hover:cursor-pointer flex items-center"
        >
          <figure class="flex flex-row gap-5">
            <Icon icon="mdi:user-outline" class="size-6" />
            <p class="">Inbox</p>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</template>
