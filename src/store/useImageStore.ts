// stores/useImageStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useImageStore = defineStore('imageStore', () => {
  const groups = ref<{ name: string; images: string[] }[]>([]);

  const addGroup = (name: string, images: string[]) => {
    groups.value.push({ name, images });
  };

  return { groups, addGroup };
});
