// useImageStore.ts
import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import {
  createGroupPost,
  addImageGroupPost,
  saveNameAndDescPut,
  groupDelete,
  deleteImageFromGroup,
  getImageGroup,
  clientDelete,
} from "@/services/useImage";

export interface Image {
  id: number;
  url: string;
}

export interface Group {
  name: string;
  images: Image[];
  textarea: string;
  imageGroupId: string;
}

export const useImageStore = defineStore("imageStore", () => {
  const groups = ref<Group[]>([]);
  const currentImage = ref<Image | null>(null);
  const clients = ref<{ id: number; name: string; login: string }[]>([]);

  const createGroupPostStore = async (objData: any) => {
    try {
      const response = await createGroupPost(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  };

  const getImageGroupStore = async () => {
    try {
      const response = await getImageGroup();
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:");
    }
  };

  const addImageGroupPostStore = async (objData: any) => {
    try {
      const response = await addImageGroupPost(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  };

  const saveNameAndDescPutStore = async (objData: any) => {
    try {
      const response = await saveNameAndDescPut(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  };

  const groupDeleteStore = async (objData: any) => {
    try {
      const response = await groupDelete(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  };

  const clientDeleteStore = async (objData: any) => {
    try {
      const response = await clientDelete(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:");
    }
  };

  const deleteImageFromGroupStore = async (image_id: number) => {
    try {
      const response = await deleteImageFromGroup(image_id);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", image_id);
    }
  };

  const setCurrentImage = (image: Image) => {
    currentImage.value = image;
  };

  const addGroup = (
    name: string,
    images: Image[],
    textarea: string,
    imageGroupId: string
  ) => {
    groups.value.push({ name, images, textarea, imageGroupId });
  };

  const addClient = (client: { id: number; name: string; login: string }) => {
    clients.value.push(client);
  };

  const setGroups = (backendGroups: any[]) => {
    groups.value = backendGroups.map((group) => ({
      name: group.name,
      images: group.images || [],
      textarea: group.comment || "",
      imageGroupId: group.id.toString(),
    }));
  };


  return {
    groups,
    clients,
    currentImage,
    addClient,
    setCurrentImage,
    addGroup,
    createGroupPostStore,
    addImageGroupPostStore,
    saveNameAndDescPutStore,
    groupDeleteStore,
    deleteImageFromGroupStore,
    getImageGroupStore,
    clientDeleteStore,
    setGroups
  };
});
