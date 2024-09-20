<template>
  <div class="image-wrapper" @click="handleImageClick">
    <img
      :src="image?.url"
      alt="Image"
      class="image"
      :style="{ width: width, height: height, objectFit: fit }"
    />
    <div v-if="isModalVisible" class="modal-overlay" @click="toggleModal">
      <div class="modal-content" @click.stop>
        <img :src="image.url" alt="Preview Image" class="modal-image" />
        <div class="checkbox-group">
          <div v-for="group in groups" :key="group.name" class="checkbox-item">
            <div>
              <input
                type="checkbox"
                :id="group.name"
                :value="group.name"
                v-model="selectedGroups"
                :disabled="selectedGroups.length > 0 && !selectedGroups.includes(group.name)"
                @change="updateGroup(group.name)"
              />
              <label
                :for="group.name"
                :class="{ 'disabled-label': selectedGroups.length > 0 && !selectedGroups.includes(group.name) }"
                style="cursor: pointer;"
              >
              {{ group.name }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close" @click="toggleModal">✖</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useImageStore } from "@/store/useImageStore";

const props = defineProps({
  image: {
    type: Object as () => { id: number, url: string },
    required: true,
  },
  width: {
    type: String,
    default: "220px",
  },
  height: {
    type: String,
    default: "220px",
  },
  fit: {
    type: String,
    default: "cover",
  },
});

const emit = defineEmits(['moveImageToGroup']);
const imageStore = useImageStore();
const groups = imageStore.groups;

const isModalVisible = ref(false);
const selectedGroups = ref<string[]>([]);

const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value;
};

const handleImageClick = () => {
  imageStore.setCurrentImage(props.image);  // Устанавливаем текущее изображение в store
  toggleModal();
};

const updateGroup = (groupName: string) => {
  // Находим группу по имени
  const group = groups.find(g => g.name === groupName);
  if (group) {
    // Находим индекс изображения в группе по id
    const index = group.images.findIndex(img => img.id === props.image.id);

    // Добавляем изображение в группу
    if (index === -1 && selectedGroups.value.includes(groupName)) {
      group.images.push(props.image);
      emit('moveImageToGroup', props.image.id, groupName); // Передаем id изображения
    }
    // Удаляем изображение из группы
    else if (index !== -1 && !selectedGroups.value.includes(groupName)) {
      group.images.splice(index, 1);
      emit('removeImageFromGroup', props.image.id, groupName); // Передаем id изображения
    }
  }
};

</script>

<style scoped>
.image-wrapper {
  position: relative;
  cursor: pointer;
}

.image {
  transition: transform 0.3s ease-in-out;
}

.image:hover {
  transform: scale(1.05);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  position: relative;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.modal-image {
  width: 100%;
  height: auto;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.checkbox-group {
  margin-top: 20px;
}

.checkbox-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.checkbox-item input[type="checkbox"] {
  margin-right: 10px;
}

.disabled-label {
  color: gray;
  cursor: no-drop;
}
</style>
