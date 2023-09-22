<script setup lang="ts">
import quickDom from '@/assets/quickDom'
import GalleryItem from '@/components/GalleryItem.vue'
import useCharacters from '@/store'
import type { Character } from '@/types/types'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const charsStore = useCharacters()
const characters = ref([] as Character[])
const elem = ref(null as null | HTMLElement)
const userInput = ref('')
const currentCharacters = computed(() => {
  if (userInput.value.length == 0) {
    return characters.value
  } else {
    return characters.value.filter((item) =>
      item.name.toLowerCase().includes(userInput.value.toLowerCase())
    )
  }
})

onMounted(async () => {
  quickDom(true)
  charsStore.currentPage = 1
  characters.value = await charsStore.getCharacters()
  window.addEventListener('scroll', scroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scroll)
  charsStore.currentPage = 1
})

async function scroll(e: Event) {
  if (elem.value) {
    if (elem.value.getBoundingClientRect().bottom < window.innerHeight) {
      if (!charsStore.isFetching) {
        charsStore.currentPage += 1
        characters.value = characters.value.concat(await charsStore.getCharacters())
      }
    }
  }
}
</script>

<template>
  <div
    class="relative flex gap-5 justify-center flex-col sm:col-span-2 sm-col-span-2 -mt-9 sm:mt-3 sm:flex-col sm:items-center sm:gap-9"
  >
    <div class="text-xl text-center sm:text-left sm:text-2xl md:text-3xl lg:text-4xl font-1">
      Gallery
    </div>
    <div class="flex flex-row justify-center">
      <input
        v-model="userInput"
        placeholder="Enter your character"
        class="px-2 p-3 text-base sm:text-2xl outline-none md:text-3xl lg:text-4xl rounded sm:rounded-sm bg-green-100 text-green-900 border border-green-400 shadow shadow-green-300 focus:shadow-green-500"
        type="text"
      />
    </div>
    <div
      ref="elem"
      class="flex justify-center items-center flex-col gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mx-2 lg:items-start md:grid"
    >
      <GalleryItem
        :data-index="index"
        v-for="(item, index) in currentCharacters"
        :key="item.id"
        :item="item"
        :index="index"
      ></GalleryItem>
    </div>
  </div>
</template>
