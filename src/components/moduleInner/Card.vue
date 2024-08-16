<template>
  <div>
    <draggable
      v-model="internalList"
      group="images"
      @end="handleDrop"
      class="products"
    >
      <div v-for="(item, index) in srcList" :key="index" class="test">
        <div class="demo-image__preview drag-item">
          <el-image
            style="width: 250px; height: 250px"
            :src="item"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="[srcList[index]]"
            fit="cover"
          />
        </div>
      </div>
    </draggable>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

// Принимаем список изображений через props
const props = defineProps({
  srcList: Array,
});

const internalList = ref([...props.srcList]);

const handleDrop = () => {
  console.log("Image dropped");
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
