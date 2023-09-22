<script setup lang="ts"></script>

<template>
  <div class="relative flex justify-center sm:col-span-2 sm-col-span-2 mt-14">
    <img
      width="650"
      height="650"
      class="hidden absolute opacity-10 bg-red-100 sm:block"
      src="/rick.svg"
    />
    <router-link to="/gallery" custom v-slot="{ navigate }">
      <button
        @click="navigate"
        role="link"
        class="absolute m-auto left-0 right-0 top-0 bg-green-400 bg-opacity-8 p-5 font-2 text-xl sm:text-2xl rounded-md shadow-md shadow-green-500 text-green-900 font-medium hover:bg-green-500 hover:text-green-100 md:text-3xl lg:text-4xl lg:tracking-wide"
      >
        Explore
      </button>
    </router-link>
  </div>
</template>
