<template lang="">
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
</template>

<style lang=""></style>
