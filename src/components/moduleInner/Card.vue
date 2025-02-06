<template>
  <div>
    <draggable
      v-model="internalList"
      group="images"
      @add="handleDropAdd"
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

const props = defineProps<{
  movedItemId: number | null;
}>();

watch(
  () => store.imagesList,
  (newList) => {
    internalList.value = [...newList];
  },
  { immediate: true }
);

const handleDropAdd = async () => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  const movedItemId = props.movedItemId;

  if (movedItemId === null) {
    console.error("No moved item ID");
    return;
  }

  let resp = await storeImage.deleteImageFromGroupStore(movedItemId);
  if(resp.success == true){
    storeImage.getImageGroupStore();
  }
};
const handleImagesDeleted = (deletedImages: { id: number, url: string }[]) => {
  internalList.value.push(...deletedImages);
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
