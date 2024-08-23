<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="d-flex align-items-center justify-content-between">
          <div>Создайте логин клиенту</div>
          <button class="modal-close" @click="closeModal">
            <img src="@/assets/img/icons/times.svg" alt="close" />
          </button>
        </div>
        <div class="modal-py">
          <el-form-item label="Логин" label-position="top">
            <el-input
              v-model="input"
              class="modal-input"
              placeholder="Логин клиента"
              size="large"
            />
          </el-form-item>
          <el-form-item label="Пароль" label-position="top">
            <el-input
              v-model="input"
              class="modal-input"
              placeholder="Пароль клиента"
              size="large"
            />
          </el-form-item>
          <el-button
            type="primary"
            plain
            @click="createdClient()"
            class="modal-button"
            >Создать</el-button
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { IPropsModalClient } from "../../../type/index";
import { ElNotification } from "element-plus";

const input = ref("");
defineProps<IPropsModalClient>();
const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => {
  emit("close");
};

const createdClient = () => {
  closeModal();
  ElNotification({
    title: "",
    message: "Вы создали логин клиенту!",
    type: "success",
  });
};
</script>
