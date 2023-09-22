<template>
  <div class="flex flex-row">
    <slot /> &nbsp;&nbsp;&nbsp;
    <span> {{ props.text }} </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>
