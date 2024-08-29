// stores/useImageStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Image {
  id: number;
  url: string;
}

interface Group {
  name: string;
  images: Image[];
}

export const useImageStore = defineStore('imageStore', () => {
  const groups = ref<Group[]>([]);

  const addGroup = (name: string, images: string[]) => {
    const imageObjects = images.map((url, index) => ({
      id: index + 1, // Generate an ID for each image (you may want to change this logic)
      url,
    }));
    groups.value.push({ name, images: imageObjects });
  };

  return { groups, addGroup };
});