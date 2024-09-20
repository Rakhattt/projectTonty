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
            :src="item.url"
            fit="cover"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="imageUrls(group.images)"
            :initial-index="itemIndex"
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
import ModalDragg from "@/components/moduleInner/ModalComponent/ModalDragg.vue";

const store = useImageStore();
const { groups } = storeToRefs(store);

const isModalVisible = ref(false);
const groupName = ref("");
const groupDescription = ref("");
const currentGroupIndex = ref<number | null>(null);

const imageUrls = (images: { id: number, url: string }[]) => {
  return images.map(image => image.url);
};

const moveImageToGroup = (image: { id: number; url: string }) => {
  const targetGroup = groups.value.find(group => group.name === groupName.value);
  if (targetGroup) {
    targetGroup.images.push(image);
    // Уведомляем родительский компонент о перемещении изображения
    emit('moveImageToGroup', image, targetGroup.name);
  }
};

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
  }
  isModalVisible.value = false;
};

const emit = defineEmits<{
  (e: "delete", deletedImages: { id: number, url: string }[]): void;
  (e: "moveImageToGroup", image: { id: number, url: string }, groupName: string): void;
}>();

const deleteGroup = (name: string) => {
  const index = groups.value.findIndex(group => group.name === name);
  if (index !== -1) {
    const deletedImages = groups.value[index].images;
    groups.value.splice(index, 1);
    emit("delete", deletedImages); // Отправка удаленных изображений в родительский компонент
  }
  isModalVisible.value = false;
};


const update = () => {
  console.log("Group updated");
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
