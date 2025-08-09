<script setup lang="ts">
import NavView from './NavView.vue'
</script>

<template>
  <div class="flex flex-row bg-gradient-to-r from-[#f1eedb] to-[#e1eaf5] text-black min-h-screen">
    <NavView />
    <div class="w-full pb-5">
      <RouterView />
    </div>
  </div>
</template>

<style lang="css"></style>
