// useImageStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { createGroupPost, addImageGroupPost, saveNameAndDescPut, groupDelete } from "@/services/useImage";

export interface Image {
  id: number;
  url: string;
}

export interface Group {
  name: string;
  images: Image[];
  string: string
}

export const useImageStore = defineStore('imageStore', () => {
  const groups = ref<Group[]>([]);
  const currentImage = ref<Image | null>(null);
  const currentImageGroupId = ref(null);

  const setImageGroupId = (id: any) => {
    currentImageGroupId.value = id;
  };

  const getImageGroupId = () => currentImageGroupId.value;

  const createGroupPostStore = async (objData: any) => {
    try {
      const response = await createGroupPost(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  }

  const addImageGroupPostStore = async (objData: any) => {
    try {
      const response = await addImageGroupPost(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  }

  const saveNameAndDescPutStore = async (objData: any) => {
    try {
      const response = await saveNameAndDescPut(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  }

  const groupDeleteStore = async (objData: any) => {
    try {
      const response = await groupDelete(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  }

  const setCurrentImage = (image: Image) => {
    currentImage.value = image;
  };

  const addGroup = (name: string, images: Image[], textarea: string) => {
    groups.value.push({ name, images, textarea});
  };

  return { groups, currentImage, setCurrentImage, addGroup, createGroupPostStore, addImageGroupPostStore, saveNameAndDescPutStore, groupDeleteStore,  currentImageGroupId,
    setImageGroupId,
    getImageGroupId, };
});
