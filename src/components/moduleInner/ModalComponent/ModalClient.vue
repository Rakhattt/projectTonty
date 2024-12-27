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
    name: loginCreate.value.login,
    login: loginCreate.value.name,
    user_type: 1,
    user_id: localStorage.getItem("user_id"),
  }
  await store.createloginPostStore(objData);
  closeModal();
};
</script>
