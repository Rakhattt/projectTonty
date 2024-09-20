<template>
  <div>
    <draggable
      v-model="internalList"
      group="images"
      @end="handleDrop"
      class="products"
      @delete="handleImagesDeleted"
    >
      <div v-for="item in internalList" :key="item.id">
        <div class="demo-image__preview drag-item">
          <CustomImage
            :image="item"
            :width="'220px'"
            :height="'220px'"
            :fit="'cover'"
            @moveImageToGroup="handleMoveImageToGroup"
            @removeImageFromGroup="handleRemoveImageFromGroup"
          />
        </div>
      </div>
    </draggable>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import CustomImage from "@/components/moduleInner/CustomImage.vue";
import { useRequestStore } from "@/store/requestStore";
import { useImageStore } from "@/store/useImageStore";

const store = useRequestStore();
const storeImage = useImageStore();
const internalList = ref([...store.imagesList]);

watch(
  () => store.imagesList,
  (newList) => {
    internalList.value = [...newList];
  },
  { immediate: true }
);

const handleDrop = () => {
  console.log("Images dropped", internalList.value);
};
const handleImagesDeleted = (deletedImages: { id: number, url: string }[]) => {
  internalList.value.push(...deletedImages);
  console.log(' parent delete', internalList.value)
};
const handleMoveImageToGroup = (imageId: number, groupName: string) => {
  if (!storeImage.groups) {
    console.error('Store groups is not defined');
    return;
  }
  console.log('storeImage.groups', storeImage.groups)
  const group = storeImage.groups.find(g => g.name === groupName);
  if (group) {
    const imageIndex = internalList.value.findIndex(img => img.id === imageId);
    if (imageIndex !== -1) {
      internalList.value.splice(imageIndex, 1);
    }
  } else {
    console.error('Group not found');
  }
};


const handleRemoveImageFromGroup = (imageId: number, groupName: string) => {
  const group = storeImage.groups.find(g => g.name === groupName);
  if (group) {
    const imageIndex = internalList.value.findIndex(img => img.id === imageId);
    if (imageIndex === -1) {
      // Если изображение не в основном списке, добавляем его
      const image = storeImage.images.find(img => img.id === imageId);
      if (image) {
        internalList.value.push(image);
      }
    }
  }
};

</script>

<style scoped>
.drag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.drag-item {
  cursor: grab;
}
</style>
