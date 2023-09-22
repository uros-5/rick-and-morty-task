<script setup lang="ts"></script>

<template>
  <router-link
    to="/"
    class="py-4 rotate-3 flex justify-center border-double shadow-md relative cursor-pointer sm:col-start-1 sm:col-span-2"
  >
    <span
      class="font-1 text-3xl sm:text-4xl text-green-950 font-bold tracking-wide bg-green-300 p-5 rotate-1 shadow-md shadow-green-700 border-l-2 border-r-4 border-green-700 border-opacity-10 md:text-5xl lg:text-6xl"
    >
      <h1>Rick and Morty Test Task</h1>
      <img
        class="absolute right-0 opacity-10 bottom-0 bg-red-100 bg-cover h-full overflow-hidden sm:hidden"
        src="/rick.svg"
      />
    </span>
  </router-link>
</template>
