<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="d-flex align-items-center justify-content-between">
          <div>Создайте пж группу</div>
          <button class="modal-close" @click="closeModal">
            <img src="@/assets/img/icons/times.svg" alt="close" />
          </button>
        </div>
        <div class="modal-py">
          <el-input
            v-model="input"
            class="modal-input"
            placeholder="Наименование группы"
            size="large"
          />
          <el-button type="primary" plain @click="saveGroup" class="modal-button"
            >Сохранить</el-button
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useImageStore } from "@/store/useImageStore";
import { IPropsModal } from "@/type/index.ts";
import { ElNotification } from 'element-plus'

const input = ref("");
defineProps<IPropsModal>();
const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => {
  emit("close");
};

const saveGroup = () => {
  const store = useImageStore();
  if (input.value) {
    store.addGroup(input.value, []);
    closeModal();
    input.value = "";
    ElNotification({
    title: '',
    message: 'Вы создали группу!',
    type: 'success',
  })
  }
};
</script>
