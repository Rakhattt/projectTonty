// useImageStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Image {
  id: number;
  url: string;
}

export interface Group {
  name: string;
  images: Image[];
}

export const useImageStore = defineStore('imageStore', () => {
  const groups = ref<Group[]>([]);
  const currentImage = ref<Image | null>(null);


  const setCurrentImage = (image: Image) => {
    currentImage.value = image;
  };

  const addGroup = (name: string, images: Image[]) => {
    groups.value.push({ name, images });
    console.log('groups',groups)
  };

  return { groups, currentImage, setCurrentImage, addGroup };
});
