<template>
  <div class="enroll">
    <h2 class="enroll_title">Войти в систему как психолог</h2>
    <div
      class="mb-3 undertitle tac"
      v-show="step === 1"
    >
      Введите 6-значный код, отправленный на <span style="color: #e6a23c;">{{ signInData.email }}</span>, чтобы
      выполнить вход.
    </div>
    <div v-if="step === 0">
      <div class="d-flex justify-center align-items-center mb-3">
        <p class="enroll_subtitle">
          Новый пользователь?
          <router-link to="sign-up" class="undertitle">
            зарегистрируйтесь тут
          </router-link>
        </p>
      </div>
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        status-icon
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item
          prop="email"
          label="Почта"
          label-position="top"
          :rules="[
            {
              type: 'email',
              message: 'Пожалуйста, введите правильный адрес электронной почты',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="signInData.email" />
        </el-form-item>

        <el-button
          @click="sendCode()"
          type="warning"
          style="margin: 0 auto; display: block"
        >
          <el-icon style="margin-right: 5px"><Message /></el-icon>
          Вход по электронной почте
        </el-button>
      </el-form>
    </div>

    <transition name="slide-fade">
      <div v-show="step === 1">
        <div class="d-flex justify-center align-items-center mb-3"></div>
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <el-form-item>
            <el-input
              v-model="signInData.code"
              placeholder="Введите код"
              type="number"
            />
          </el-form-item>

          <el-button
            @click="signIn()"
            type="warning"
            style="margin: 0 auto; display: block"
          >
            Войти
          </el-button>
          <div class="tac" style="margin-top: 12px">
            Не пришел код?
            <p v-if="timerSec !== 0">
              Отправить код повторно через {{ timerSec }} сек
            </p>
            <a href="javascript:;" style="color: #ebb86b;" v-else @click="startTimer()">Отправить код повторно</a>
          </div>

          <el-button @click="step--" style="margin-top: 10px;"><el-icon style="margin-right: 5px;"><Back /></el-icon>Назад</el-button>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { ISignInData } from "../../../type/index";

const ruleFormRef = ref<FormInstance>();
const signInData = ref<ISignInData>({
  email: "",
  code: "",
});

defineProps<ISignInData>();

const router = useRouter();
const step = ref<number>(0);
const timerSec = ref<number>(30);
let timerInterval: ReturnType<typeof setInterval>;

const nextStep = () => {
  step.value++;
};

const signIn = () => {
  router.push({ name: "main" });
};

const sendCode = () => {
  nextStep();
  startTimer();
};

const startTimer = () => {
  timerSec.value = 30; 
  timerInterval = setInterval(() => {
    if (timerSec.value > 0) {
      timerSec.value--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
};
</script>
<style>
.mb-3 {
  margin: 12px;
}
.undertitle {
  color: #495c93; 
  font-weight: 600;
}
</style>
