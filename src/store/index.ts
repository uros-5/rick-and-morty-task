import type { Character } from "@/types/types";
import { isCharacterResponse } from "@/types/types.guard";
import { defineStore } from "pinia";
import { ref } from "vue";

const useCharacters = defineStore('charactersStore', () => {
  const all = ref([] as Character[]);
  const previousPages = ref([] as number[]);
  const currentPage = ref(0);
  const isFetching = ref(false);

  return {
    all, previousPages, currentPage, isFetching,
    async getCharacters(): Promise<Character[]> {
      if (isFetching.value) return [];
      const page = previousPages.value.length == 0 ? 1 : currentPage.value;
      if (previousPages.value.includes(page)) {
        let a = this.getPartOfChars(page);
        return a;
      }
      isFetching.value = true;
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const characters = await response.json();
      if (isCharacterResponse(characters)) {
        previousPages.value.push(page)
        all.value = all.value.concat(characters.results);
        isFetching.value = false;
        previousPages.value.push(page);
        return characters.results;
      }
      return []
    },
    getPartOfChars(page: number): Character[] {
      const end = page * 20;
      const start = end - 20;
      return all.value.slice(start, end);
    }
  }
});

export default useCharacters;
