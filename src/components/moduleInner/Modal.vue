<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="d-flex align-items-center">
          <button class="modal-close" @click="closeModal">
            <img src="@/assets/img/icons/times.svg" alt="close" />
          </button>
        </div>
        <div class="modal-body">
          <div>Создайте пж группу</div>
          <el-input
            v-model="input"
            style="width: 240px"
            placeholder="напиши что то"
          />
        </div>
        <el-button type="success" round @click="saveGroup">Сохранить</el-button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useImageStore } from "@/store/useImageStore";
import { IPropsModal } from "@/type/index.ts";
const input = ref("");
defineProps<IPropsModal>();
const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => {
  emit("close");
};

const saveGroup = () => {
  const store = useImageStore();
  if (input.value) {
    store.addGroup(input.value, []);
    closeModal();
    input.value = ''
  }
};
</script>
