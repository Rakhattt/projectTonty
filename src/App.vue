<template>
  <div v-if="isAuthPage">
    <router-view />
  </div>
  <div v-else>
    <Header />
    <div class="container d-flex justify-content-between align-items-center">
      <Breadcrumbs />
      <el-button v-if="$route.name == 'main'" type="primary" size="large" @click="showModal = true">Создать группу</el-button>
      <el-button v-if="$route.name == 'personal-account'" type="primary" size="large" @click="showModalClient = true">Создать логин клиенту</el-button>
      <Modal @close="showModal = false" :visible="showModal"/>
      <ModalClient @close="showModalClient = false" :visible="showModalClient" />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/module/Header.vue";
import Breadcrumbs from "./components/ui/Breadcrumbs.vue";
import Modal from "./components/moduleInner/ModalComponent/Modal.vue";
import ModalClient from "./components/moduleInner/ModalComponent/ModalClient.vue";

const showModal = ref(false);
const showModalClient = ref(false);
const route = useRoute();

const isAuthPage = computed(() => {
  return route.name === 'sign-up' || route.name === 'sign-in' || route.name === 'login';
});
</script>
