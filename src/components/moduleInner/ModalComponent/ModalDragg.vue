<template>
    <transition name="modal-fade">
      <div v-if="visible" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="d-flex align-items-center justify-content-between">
            <div>Вы можете редактировать здесь</div>
            <button class="modal-close" @click="closeModal">
              <img src="@/assets/img/icons/times.svg" alt="close" />
            </button>
          </div>
          <div class="modal-py">
            <label for="modal-input" class="input-label">Наименование группы:</label>
            <el-input
              v-model="inputDragg"
              class="modal-input"
              placeholder="Наименование группы"
              size="large"
              id="modal-input"
            />
            <label for="modal-textarea" class="input-label">Введите описание (по желанию):</label>
            <el-input
              v-model="textareaDragg"
              :autosize="{ minRows: 2, maxRows: 4 }"
              type="textarea"
              placeholder="Введите описание"
              id="modal-textarea"
              class="modal-textarea"
            />
            <div class="d-flex align-items-center justify-content-between mt-4">
              <el-button type="danger" plain @click="deleteGroup">Удалить группу</el-button>
              <el-button type="primary" plain @click="saveGroup">Сохранить</el-button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import { ElNotification } from "element-plus";
  
  const props = defineProps<{
    visible: boolean;
    initialInput: string;
    initialDescription?: string;
  }>();
  
  const emit = defineEmits<{
    (e: "close"): void;
    (e: "save", name: string, description: string): void;
    (e: "delete", name: string): void;
  }>();
  
  const inputDragg = ref(props.initialInput || "");
  const textareaDragg = ref(props.initialDescription ?? "");
  
  const closeModal = () => {
    emit("close");
  };
  
  const saveGroup = () => {
    if (inputDragg.value) {
      emit("save", inputDragg.value, textareaDragg.value);
      closeModal();
      ElNotification({
        title: "",
        message: "Вы обновили текст группы!",
        type: "success",
      });
    }
  };
  
  const deleteGroup = () => {
    if (inputDragg.value) {
      emit("delete", inputDragg.value);
      closeModal();
      ElNotification({
        title: "",
        message: "Группа удалена!",
        type: "warning",
      });
    }
  };
  </script>
  
  <style scoped>
  .modal-input {
    margin-bottom: 20px;
  }
  
.mt-4 {
    padding-top: 40px;
}
  </style>
  