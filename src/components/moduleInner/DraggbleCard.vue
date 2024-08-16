<template>
  <div style="display: flex; margin-top: 100px">
    <div v-for="(group, index) in groups" :key="index">
      <h3>{{ group.name }}</h3>
      <draggable
        v-model="group.images"
        group="images"
        class="drag-container"
        @end="update"
      >
        <div
          v-for="(item, itemIndex) in group.images"
          :key="itemIndex"
          class="drag-item"
        >
          <el-image :src="item" fit="cover" :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
           />
        </div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useImageStore } from "@/store/useImageStore";
import { storeToRefs } from "pinia";

const store = useImageStore();
const { groups } = storeToRefs(store);

const update = () => {
  console.log("Lists updated");
};
</script>

<style scoped>
.drag-container {
  width: 400px;
  min-height: 100px;
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
