<script setup>
import NavBar from "@/components/NavBar.vue"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <main class="py-32 bg-[hsl(0,0%,98%)] dark:bg-[hsl(207,26%,17%)] text-[hsl(200,15%,8%)] dark:text-[hsl(0,0%,100%)]">
    <RouterView />
  </main>
</template>

<style scoped></style>
