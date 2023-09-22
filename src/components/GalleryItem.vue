<script setup lang="ts">
import type { Character } from '@/types/types'
import Created from './icons/Created.vue'
import Location from './icons/Location.vue'
import Name from './icons/Name.vue'
import Status from './icons/Status.vue'
import ItemIcon from './icons/ItemIcon.vue'
import { onMounted, ref } from 'vue'
import { cssVariables } from '@/assets/cssVariables'
import { scrollObserver } from '@/assets/scrollObserver'

const props = defineProps<{ item: Character; index: number }>()
const toLoad = ref(false)
const observedElement = ref(null as null | HTMLElement)
const observer = scrollObserver((arg) => {
  toLoad.value = arg.isIntersecting
  if (toLoad.value) {
    observer.unobserve(observedElement.value as HTMLElement)
  }
})

onMounted(() => {
  observer.observe(observedElement.value as Element)
})
</script>

<template>
  <div
    ref="observedElement"
    :style="cssVariables(index)"
    class="grid grid-cols-3 gap-2 mx-2 items-between grid-rows-auto lg:grid-rows-2"
  >
    <div class="col-span-1 lg:row-span-2">
      <Transition name="gallery-items">
        <img
          v-if="toLoad"
          :src="props.item.image"
          class="rounded-lg border border-green-900 border-r-4 lg:border-r-0 lg:border-b-4 transition-transform scale-100"
        />
      </Transition>
    </div>
    <div class="col-span-2 lg:row-span-2 flex flex-col justify-between">
      <ItemIcon :text="`${props.item.name} / ${props.item.gender}`">
        <Name />
      </ItemIcon>
      <ItemIcon :text="new Date(props.item.created).toDateString()">
        <Created />
      </ItemIcon>
      <ItemIcon :text="props.item.location.name"> <Location /> </ItemIcon>
      <ItemIcon :text="props.item.status">
        <Status :status="props.item.status" />
      </ItemIcon>
    </div>
  </div>
</template>

<style>
.gallery-items-enter-from,
.gallery-items-leave-to {
  opacity: 0;
  transform: translate(var(--item-translate));
}

.gallery-items-move,
.gallery-items-enter-active,
.gallery-items-leave-active {
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-delay: var(--item-delay);
  transition-timing-function: ease-in;
}
</style>
