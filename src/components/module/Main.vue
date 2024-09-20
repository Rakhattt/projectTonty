<template>
  <main>
    <div class="container">
      <Loading :active="loading" />
      <div class="d-flex justify-content-between mt-10">
        <Card />
        <DraggableCard
          @delete="handleDeletedImages" 
          @update="updateImages" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Card from "../moduleInner/Card.vue";
import DraggableCard from "../moduleInner/DraggbleCard.vue";
import Loading from "../ui/Loading.vue";
import { useRequestStore } from "@/store/requestStore";

const store = useRequestStore();
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    await store.getCardsStore();
  } catch (error) {
    console.error("Ошибка при загрузке изображений:", error);
  } finally {
    loading.value = false;
  }
});

const handleDeletedImages = (deletedImages: string[]) => {
  store.imagesList.push(...deletedImages);
  console.log("imagesList.value", store.imagesList);
};

const updateImages = (newImages) => {
  // console.log("imagesList.value", store.imagesList);
};
</script>

<style scoped>
.mt-10 {
  margin-top: 40px;
}
</style>
