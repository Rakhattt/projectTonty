<template>
  <div class="enroll">
    <h2 class="enroll_title">Зарегистрироваться</h2>
    <div class="d-flex justify-center align-items-center mb-3">
      <p class="enroll_subtitle">У вас уже есть учетная запись?</p>
      <router-link to="sign-in" style="font-weight: 600; color: #495c93;"> Войдите здесь</router-link>
    </div>
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      status-icon
      label-width="auto"
      class="demo-ruleForm"
      @submit.prevent="signUp"
    >
      <div class="d-flex justify-content-between">
        <el-form-item label="Имя" label-position="top">
          <el-input
            v-model="signUpData.firstName"
            style="width: 260px"
            placeholder="Имя"
          />
        </el-form-item>
        <el-form-item label="Фамилия" label-position="top">
          <el-input
            v-model="signUpData.lastName"
            style="width: 260px"
            placeholder="Фамилия"
        /></el-form-item>
      </div>
      <el-form-item
        prop="email"
        label="Почта"
        label-position="top"
        :rules="[
          // {
          //   required: true,
          //   message: 'Пожалуйста, введите адрес электронной почты',
          //   trigger: 'blur',
          // },
          {
            type: 'email',
            message: 'Пожалуйста, введите правильный адрес электронной почты',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="signUpData.email" />
      </el-form-item>

      <el-form-item label="Пароль" label-position="top">
        <el-input
          v-model="signUpData.password"
          required
          type="password"
          placeholder="Пароль"
          show-password
        />
      </el-form-item>
      <el-button type="submit primary" class="ml-auto">Зарегистрироваться</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { ISignUpData } from "../../../type/index";
const ruleFormRef = ref<FormInstance>();

const signUpData = ref<ISignUpData>({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});
defineProps<ISignUpData>();

const router = useRouter();

const signUp = () => {
  router.push({ name: "main" });
};
</script>
<style scoped>
.mb-3 {
  margin-bottom: 15px;
}
</style>