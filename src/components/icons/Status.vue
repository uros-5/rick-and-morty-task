<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12">
    <path
      :class="{
        'fill-red-500': props.status == 'Dead',
        'fill-gray-500': props.status == 'unknown',
        'fill-green-500': props.status == 'Alive'
      }"
      fillRule="evenodd"
      d="M6 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8zm0 2A6 6 0 1 0 6 0a6 6 0 0 0 0 12z"
      clipRule="evenodd"
    ></path>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ status: 'Dead' | 'Alive' | 'unknown' }>()
</script>
