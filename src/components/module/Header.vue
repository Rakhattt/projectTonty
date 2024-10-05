<template>
  <header>
    <div class="container">
      <div class="header">
        <router-link to="/" class="logo"
          ><img class="icon_small" src="@/assets/img/icons/logo.svg" alt="logo"
        /></router-link>
        <ul class="nav">
          <li v-for="link in links" :key="link.title">
            <router-link :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
        <div class="ml-20">
          <el-popover
            placement="top-start"
            :width="250"
            trigger="hover"
            content="Это Ваш личный кабинет. Здесь вы можете добавлять,
                  редактировать, удалять своих клиентов."
          >
            <template #reference>
              <router-link to="/personal-account" class="person"> Личный кабинет </router-link>
            </template>
          </el-popover>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ILinksHeader } from "@/type/index.ts";
const links = ref<ILinksHeader[]>([
  { title: "Главная", url: "/" },
  { title: "Справочник", url: "/guide" },
]);
defineProps<ILinksHeader>();
</script>
<style scoped>
.ml-20 {
  margin-left: 40px;
}
.title {
  color: #fff;
}
.person {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  font-weight: 500;
}
</style>
