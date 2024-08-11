<template>
  <div style="display: flex; justify-content: space-around; margin-top: 100px">
    <!-- Draggable List 1 -->
    <div>
      <h3>Draggable 1</h3>
      <draggable
        v-model="list1"
        group="images"
        class="drag-container"
        @end="update"
      >
        <div v-for="(item, index) in list1" :key="index" class="drag-item">
          <el-image
            style="width: 100px; height: 100px"
            :src="item"
            fit="cover"
          />
        </div>
      </draggable>
    </div>

    <!-- Draggable List 2 -->
    <div>
      <h3>Draggable 2</h3>
      <draggable
        v-model="list2"
        group="images"
        class="drag-container"
        @end="update"
      >
        <div v-for="(item, index) in list2" :key="index" class="drag-item">
          <el-image
            style="width: 100px; height: 100px"
            :src="item"
            fit="cover"
          />
        </div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Инициализация двух списков изображений
const list1 = ref([
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
]);

const list2 = ref([
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
]);

const update = () => {
  console.log("Lists updated");
};
</script>

<style scoped>
.drag-container {
  width: 200px;
  min-height: 200px;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}

.drag-item {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px;
}
</style>
