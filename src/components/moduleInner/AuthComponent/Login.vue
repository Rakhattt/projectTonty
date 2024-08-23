<template>
    <div class="enroll">
      <h2 class="enroll_title">Войти в систему как клиент</h2>
      <div class="d-flex justify-center align-items-center mb-3">
        <p class="enroll_subtitle">Не можете войти? Обратитесь к своему <span style="color: #495c93; font-weight: 600;">психологу</span></p>
      </div>
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        status-icon
        label-width="auto"
        class="demo-ruleForm"
        @submit.prevent="signIn"
      >
        <el-form-item label="Логин" label-position="top">
          <el-input v-model="signInData.login" placeholder="Логин" />
        </el-form-item>
  
        <el-form-item label="Пароль" label-position="top">
          <el-input
            v-model="signInData.password"
            required
            type="password"
            placeholder="Пароль"
            show-password
          />
        </el-form-item>
        <el-button type="submit primary" class="ml-auto"
          >Войти</el-button
        >
      </el-form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import type { FormInstance } from "element-plus";
  import { ILogin } from "../../../type/index";
  const ruleFormRef = ref<FormInstance>();
  
  const signInData = ref<ILogin>({
    login: "",
    password: "",
  });
  defineProps<ILogin>();
  const router = useRouter();
  
  const signIn = () => {
    if (signInData.value.login === "test@example.com" && signInData.value.password === "password") {
      router.push({ name: "main" });
    } else {
      alert("иииииууу");
    }
  };
  </script>
  