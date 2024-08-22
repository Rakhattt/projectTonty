<template>
  <div>
    <div v-for="(group, index) in groups" :key="index" class="mb-10">
      <div class="d-flex justify-content-between mb-2">
        <input
          type="text"
          :value="group.name"
          readonly
        />
        <el-icon class="draggble_edit" @click="openModal(group, index)">
          <EditPen />
        </el-icon>
      </div>
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
          <el-image
            :src="item"
            fit="cover"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
          />
        </div>
      </draggable>
    </div>
    
    <ModalDragg
      v-if="isModalVisible"
      :visible.sync="isModalVisible"
      :initial-input="groupName"
      :initial-description="groupDescription"
      @close="isModalVisible = false"
      @save="saveGroupName"
      @delete="deleteGroup"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useImageStore } from "@/store/useImageStore";
import { storeToRefs } from "pinia";
import ModalDragg from "@/components/moduleInner/ModalDragg.vue";

const store = useImageStore();
const { groups } = storeToRefs(store);

const isModalVisible = ref(false);
const groupName = ref("");
const groupDescription = ref("");
const currentGroupIndex = ref<number | null>(null);  

const openModal = (group: any, index: number) => {
  groupName.value = group.name;
  groupDescription.value = group.description || "";
  currentGroupIndex.value = index;
  isModalVisible.value = true;
};

const saveGroupName = (name: string, description: string) => {
  if (currentGroupIndex.value !== null) {
    groups.value[currentGroupIndex.value].name = name;
    groups.value[currentGroupIndex.value].description = description;
    console.log("Updated group:", groups.value[currentGroupIndex.value]);
  }
  isModalVisible.value = false;
};

const deleteGroup = (name: string) => {
  const index = groups.value.findIndex(group => group.name === name);
  if (index !== -1) {
    groups.value.splice(index, 1);
    console.log(`Группа "${name}" была удалена.`);
  }
  isModalVisible.value = false;
};

const update = () => {
  console.log("Lists updated");
};
</script>

<style scoped>
.drag-container {
  width: 250px;
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

.editable {
  border: 2px solid #409EFF;
  background-color: #f0f9ff;
}

.focused {
  outline: none;
  border-color: #66b1ff;
  box-shadow: 0 0 8px rgba(102, 177, 255, 0.6);
}
.mb-10 {
  margin-bottom: 40px;
}
</style>
