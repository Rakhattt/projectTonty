<template>
  <div>
    <div v-for="(group, index) in groups" :key="index" class="mb-10">
      <!-- <pre>{{ group }}</pre> -->
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
        @add="handleDropEnd(group.imageGroupId, $event)"
        @end="handleDropEmit($event)"
      >
        <div
          v-for="(item, itemIndex) in group.images"
          :key="itemIndex"
          class="drag-item"
          :data-id="item.id"
        >
          <el-image
            :src="item.url"
            fit="cover"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="imageUrls(group.images)"
            :initial-index="itemIndex"
            class="dragg-img"
          />
        </div>
      </draggable>
    </div>
    
    <ModalDragg
      v-if="isModalVisible"
      :visible.sync="isModalVisible"
      :initial-input="groupName"
      :initial-description="groupDescription"
      :initial-imageGroupId="imageGroupId"
      @close="isModalVisible = false"
      @save="saveGroupName"
      @delete="deleteGroup"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useImageStore } from "@/store/useImageStore";
import { storeToRefs } from "pinia";
import ModalDragg from "@/components/moduleInner/ModalComponent/ModalDragg.vue";

const store = useImageStore();
const { groups } = storeToRefs(store);

const isModalVisible = ref(false);
const groupName = ref("");
const groupDescription = ref("");
const imageGroupId = ref<number>();
const currentGroupIndex = ref<number | null>(null);

const imageUrls = (images: { id: number, url: string }[]) => {
  return images.map(image => image.url);
};

const moveImageToGroup = (image: { id: number; url: string }) => {
  const targetGroup = groups.value.find(group => group.name === groupName.value);
  if (targetGroup) {
    targetGroup.images.push(image);
    emit('moveImageToGroup', image, targetGroup.name);
  }
};

const openModal = (group: any, index: number) => {
  groupName.value = group.name;
  groupDescription.value = group.textarea || "";
  imageGroupId.value = group.imageGroupId;
  currentGroupIndex.value = index;
  isModalVisible.value = true;
};

const saveGroupName = (name: string, textarea: string) => {
  if (currentGroupIndex.value !== null) {
    groups.value[currentGroupIndex.value].name = name;
    groups.value[currentGroupIndex.value].textarea = textarea;
  }
  isModalVisible.value = false;
};

const emit = defineEmits<{
  (e: "card-dropped", payload: { imageGroupId: number; movedItem: { id: number; url: string } }): void;
  (e: "delete", deletedImages: { id: number, url: string }[]): void;
  (e: "moveImageToGroup", image: { id: number, url: string }, groupName: string): void;
  (e: "item-moved", payload: { itemId: number }): void;
}>();

const deleteGroup = (name: string) => {
  const index = groups.value.findIndex(group => group.name === name);
  if (index !== -1) {
    const deletedImages = groups.value[index].images;
    groups.value.splice(index, 1);
    emit("delete", deletedImages); 
  }
  isModalVisible.value = false;
};


const handleDropEnd = async (image_group_id: string, event: any) => {
  const imageId = event.item._underlying_vm_.id;

  let objData = {
    image_id: imageId,
    image_group_id: image_group_id,
  };

  let resp = await store.addImageGroupPostStore(objData);
  if(resp.success == true){
    store.getImageGroupStore();
  }
};

const handleDropEmit = async (event: any) => {
  const imageId = event.item._underlying_vm_?.id;
  if (!imageId) {
    return;
  }
  emit("item-moved", { itemId: imageId });
}

onMounted(() => {
  setTimeout(async() => {
    let data = await store.getImageGroupStore();
    store.setGroups(data);
  }, 500)
});

</script>

<style scoped>
.dragg-img {
  width: 200px;
  height: 200px;
}
.dragg-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
