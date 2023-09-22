<script setup lang="ts">
import { RouterView } from 'vue-router'
import HomeHeader from '@/components/HomeHeader.vue'
</script>

<template>
  <main class="grid grid-cols-1 gap-16 my-1 sm:grid-cols-2 sm:grid-rows-auto">
    <HomeHeader />
    <RouterView v-slot="{ Component }">
      <transition name="page-view">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<style scoped>
.page-view-enter-active {
  transition: all 0.3s ease-out;
}

.page-view-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.1, 0.8, 1);
}

.page-view-enter-from,
.page-view-leave-to {
  transform: translateX(20px) translateY(10px) translate3d(10px, 10px, 10px);
  opacity: 0;
}
</style>
