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
          <el-form-item label="Имя" label-position="top">
            <el-input
              v-model="loginCreate.name"
              class="modal-input"
              placeholder="Имя"
              size="large"
            />
          </el-form-item>
          <el-form-item label="Логин" label-position="top">
            <el-input
              v-model="loginCreate.login"
              class="modal-input"
              placeholder="Логин клиента"
              size="large"
            />
          </el-form-item>
          <el-button
            type="primary"
            plain
            @click="createClient()"
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
import { IPropsModalClient, IloginCreate } from "../../../type/index";
import { ElNotification } from "element-plus";
import { useAuthenticateStore } from "@/store/authenticateStore";

const store = useAuthenticateStore();

const loginCreate = ref<IloginCreate>({
  login: "",
  name: "",
});
type CombinedProps = IloginCreate & IPropsModalClient;

defineProps<CombinedProps>();
const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => {
  emit("close");
};

const createClient = async() => {
  let objData = {
    "username": loginCreate.value.login,
    "password": "",
    "first_name": loginCreate.value.name,
    "last_name": "",
    "email": "",
    "user_type": 3
  }
  await store.createloginPostStore(objData);
  closeModal();
  ElNotification({
    title: "",
    message: "Вы создали логин клиенту!",
    type: "success",
  });
};
</script>
