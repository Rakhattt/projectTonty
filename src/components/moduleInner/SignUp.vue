<template>
  <div class="enroll">
    <h2>зарегистрироваться</h2>
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      status-icon
      label-width="auto"
      class="demo-ruleForm"
      @submit.prevent="signUp"
    >
      <el-form-item
        prop="email"
        label="Email"
        :rules="[
          {
            required: true,
            message: 'Пожалуйста, введите адрес электронной почты',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Пожалуйста, введите правильный адрес электронной почты',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="email" required />
      </el-form-item>

      <label>Password:</label>
      <el-input
        v-model="password"
        required
        style="width: 240px"
        type="password"
        placeholder="Please input password"
        show-password
      />

      <el-button type="submit primary">Зарегистрироваться</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
const ruleFormRef = ref<FormInstance>();

const email = ref("");
const password = ref("");
const router = useRouter();

const signUp = () => {
  // Логика регистрации
  router.push({ name: "main" });
};
</script>
