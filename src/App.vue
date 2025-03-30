<template>
  <div v-if="isAuthPage">
    <router-view />
  </div>
  <div v-else>
    <Header class="header_main"/>
    <div class="container d-flex justify-content-between align-items-center">
      <Breadcrumbs />
      <el-button
        v-if="$route.name == 'main'"
        type="primary"
        size="large"
        @click="showModal = true"
        >Создать группу</el-button
      >
      <el-button
        v-if="$route.name == 'personal-account'"
        type="primary"
        size="large"
        @click="showModalClient = true"
        >Создать логин клиенту</el-button
      >

      <el-popconfirm
        v-if="$route.name == 'personal-account-details'"
        title="Вы уверены, что нужно удалить все данные?"
        confirm-button-text="Да"
        cancel-button-text="Нет"
        icon-color="#f56c6c"
        @confirm="confirmEvent"
        @cancel="cancelEvent"
        width="220"
        :icon="InfoFilled"
      >
        <template #reference>
          <el-button type="danger" size="large">Удалить клиента</el-button>
        </template>
      </el-popconfirm>

      <Modal @close="showModal = false" :visible="showModal" />
      <ModalClient
        @close="showModalClient = false"
        :visible="showModalClient"
      />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute,useRouter } from "vue-router";
import Header from "./components/module/Header.vue";
import Breadcrumbs from "./components/ui/Breadcrumbs.vue";
import Modal from "./components/moduleInner/ModalComponent/Modal.vue";
import ModalClient from "./components/moduleInner/ModalComponent/ModalClient.vue";
import { InfoFilled } from "@element-plus/icons-vue";
import { useImageStore } from "@/store/useImageStore";

const store = useImageStore();
const showModal = ref(false);
const showModalClient = ref(false);
const route = useRoute();
const router = useRouter();

const isAuthPage = computed(() => {
  return (
    route.name === "sign-up" ||
    route.name === "sign-in" ||
    route.name === "login"
  );
});
const clientId = computed(() => Number(route.params.id));

const confirmEvent = async () => {
  let response = await store.clientDeleteStore(clientId.value);
  if(response.success){
    router.push({ name: "personal-account" });
  }
};
const cancelEvent = () => {
  console.log("cancel!");
};
</script>
