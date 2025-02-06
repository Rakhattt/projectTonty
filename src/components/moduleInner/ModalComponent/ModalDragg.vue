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
  import { useImageStore } from "@/store/useImageStore";

  const store = useImageStore();
  const props = defineProps<{
    visible: boolean;
    initialInput: string;
    initialDescription: string;
    initialImageGroupId: number
  }>();
  
  const emit = defineEmits<{
    (e: "close"): void;
    (e: "save", name: string, description: string): void;
    (e: "delete", name: string, description: string): void;
  }>();
  
  const inputDragg = ref(props.initialInput || "");
  const textareaDragg = ref(props.initialDescription || "");

  const closeModal = () => {
    emit("close");
  };
  
  const saveGroup = async () => {
    if (inputDragg.value) {
      emit("save", inputDragg.value, textareaDragg.value);
      let objData = {
        name: inputDragg.value,
        comment: textareaDragg.value,
        image_group_id: props.initialImageGroupId,
      }
     await store.saveNameAndDescPutStore(objData);
      closeModal();
    }
  };
  
  const deleteGroup = async () => {
    if (inputDragg.value) {
      emit("delete", inputDragg.value, textareaDragg.value);
      let resp = await store.groupDeleteStore(props.initialImageGroupId);
      if(resp.success == true){
        store.getImageGroupStore();
      }
      closeModal();
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
  