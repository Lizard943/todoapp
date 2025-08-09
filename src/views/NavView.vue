<template lang="">
  <div
    class="w-[25%] h-screen overflow-y-auto bg-white bg-opacity-75 px-5 font-monaSan font-medium sticky top-0 left-0 hidden lg:block"
  >
    <div class="h-36 flex justify-center items-center" role="logo">
      <h1 class="text-6xl font-bold text-gray-700 w-auto">
        DOIT<span class="text-[#92401d]">.</span>
      </h1>
    </div>
    <hr class="border-[1px] border-[#c5a86e]" />
    <figure class="flex flex-row gap-2 mt-3 items-center justify-between">
      <div class="flex flex-row gap-2">
        <img
          src="../assets/luan.png"
          alt=""
          class="mask mask-square rounded-xl size-12 object-cover"
        />
        <section class="flex flex-col">
          <p class="text-gray-500 brightness-50">Luân Vũ</p>
          <p class="text-gray-500">vuliz943@gmail.com</p>
        </section>
      </div>

      <div class="size-6">
        <Icon icon="mdi:bell-outline" class="size-6" />
      </div>
    </figure>

    <MainMenu />

    <hr class="border-[1px] border-[#c5a86e]" />

    <div class="">
      <header class="text-[#c5a86e]">OTHER</header>
      <ul class="w-full p-2 bg-inherit space-y-1 text-gray-600">
        <li
          v-for="i in 2"
          :key="i"
          class="h-10 p-4 bg-inherit hover:brightness-90 hover:rounded-lg hover:cursor-pointer flex items-center"
        >
          <figure class="flex flex-row gap-5">
            <Icon icon="mdi:user-outline" class="size-6" />
            <p class="">Inbox</p>
          </figure>
        </li>

        <li
          @click="handleSignOut"
          class="h-10 p-4 bg-inherit hover:brightness-90 hover:rounded-lg hover:cursor-pointer flex items-center"
        >
          <figure class="flex flex-row gap-5">
            <Icon icon="mdi:user-outline" class="size-6" />
            <p class="">Sign Out</p>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/sidenav/MainMenu.vue'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut, type Auth } from 'firebase/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoggedIn = ref(false)
let auth: Auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>
