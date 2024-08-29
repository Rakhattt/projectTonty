<template>
  <div>
    <draggable
      v-model="internalList"
      group="images"
      @end="handleDrop"
      class="products"
    >
      <div v-for="(item, index) in internalList" :key="index">
        <div class="demo-image__preview drag-item">
          <CustomImage
            :src="item.url"
            width="220px"
            height="220px"
            fit="cover"
            :groups="props.groups" 
          />
        </div>
      </div>
    </draggable>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch } from "vue";
import CustomImage from "@/components/moduleInner/CustomImage.vue";

const props = defineProps({
  srcList: Array,
  groups: {
    type: Array as () => { name: string, images: string[] }[],
    required: true,
  },
  deletedImages: Array
});

const internalList = ref([...props.srcList]);

watch(props.deletedImages, (newImages) => {
  internalList.value.push(...newImages); // Добавляем удаленные изображения в список
});

const handleDrop = () => {
  console.log("Images dropped", internalList);
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
