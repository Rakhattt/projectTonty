<template>
  <Header />
  <div class="container d-flex justify-content-between align-items-center">
    <Breadcrumbs />
    <el-button type="primary" size="large"  @click="showModal = true">Создать группу</el-button>
    <Modal @close="showModal = false" :visible="showModal"/>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Header from "./components/module/Header.vue";
import Breadcrumbs from "./components/ui/Breadcrumbs.vue";
import Modal from "./components/moduleInner/Modal.vue"
const showModal = ref(false);

</script>
