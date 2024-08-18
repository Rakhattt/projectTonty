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
            style="width: 220px; height: 220px"
            :src="item"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="[srcList[index]]"
            fit="cover"
          />
        </div>
      </div>
      <el-dialog
        :visible.sync="isModalVisible"
        width="50%"
        @close="isModalVisible = false"
        class="ROKHA"
      >
        <template v-slot:title>
          <el-checkbox v-model="checkedItems[currentIndex]"
            >Выбрать</el-checkbox
          >
        </template>
        <img :src="items[currentIndex]" style="width: 100%" />
      </el-dialog>
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
const items = ref([
  // Ссылки на изображения
  "path/to/image1.jpg",
  "path/to/image2.jpg",
  "path/to/image3.jpg",
  // ...
]);
const checkedItems = ref(Array(items.value.length).fill(false)); // Состояние чекбоксов
const isModalVisible = ref(true);
const currentIndex = ref(0); // Индекс текущего изображения

const openModal = (index) => {
  currentIndex.value = index;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

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
