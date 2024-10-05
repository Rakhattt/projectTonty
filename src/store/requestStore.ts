import { defineStore } from "pinia";
import { ref } from "vue";
import { getCards } from "@/services/request";

export const useRequestStore = defineStore("requestStore", () => {
  const imagesList = ref<any[]>([]);

  const getCardsStore = async () => {
    try {
      const response = await getCards();
      imagesList.value = response.map((item: any, index: number) => ({
        id: item.id || index + 1,
        url: item.url,
      }));
    //  imagesList.value = [
    //     {
    //         id: 1,
    //         url: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
    //       },
    //       {
    //         id: 2,
    //         url: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
    //       },
    //       {
    //         id: 3,
    //         url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
    //       },
    // ]
    } catch (error) {
      console.error("Ошибка при загрузке изображений:", error);
    }
  };

  return { imagesList, getCardsStore };
});
