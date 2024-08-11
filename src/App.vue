<template>
  <Header />
  <div class="container d-flex justify-content-between align-items-center">
    <Breadcrumbs />
    <el-button type="primary" size="large">Создать группу</el-button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/module/Header.vue";
import Breadcrumbs from "./components/ui/Breadcrumbs.vue";
export default defineComponent({
  name: "App",
  components: {
    Header,
    Breadcrumbs,
  },
});
</script>
