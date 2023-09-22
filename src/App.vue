<script setup lang="ts">
import { RouterView } from 'vue-router'
import HomeHeader from '@/components/HomeHeader.vue'
</script>

<template>
  <main class="grid grid-cols-1 grid-rows-3 gap-16 my-1 sm:grid-cols-2 sm:grid-rows-auto">
    <HomeHeader />
    <router-view v-slot="{ Component }">
      <transition name="list">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped></style>
