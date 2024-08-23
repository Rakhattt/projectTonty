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
            :width="300"
            popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
          >
            <template #reference
              ><div class="title">Личный кабинет</div></template
            >
            <template #default>
              <div style="display: flex; gap: 16px; flex-direction: column">
                <router-link
                  to="/personal-account"
                  class="d-flex align-items-center person"
                >
                  <el-icon style="margin-right: 5px"><UserFilled /></el-icon>
                  <p>Tolganay Bayetova</p>
                </router-link>
                <p style="color: #e6a23c">
                  Это Ваш личный кабинет. Здесь вы можете добавлять,
                  редактировать, удалять своих клиентов.
                </p>
              </div>
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
  font-weight: 500;
  color: black;
  transition: 0.3s;
}
.person:hover {
  color: #2667ff;
}
</style>
