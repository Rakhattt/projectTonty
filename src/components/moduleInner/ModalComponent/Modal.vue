<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="d-flex align-items-center justify-content-between">
          <div>Создайте пж группу</div>
          <button class="modal-close" @click="closeModal">
            <img src="@/assets/img/icons/times.svg" alt="close" />
          </button>
        </div>
        <div class="modal-py">
          <el-input
            v-model="input"
            class="modal-input"
            placeholder="Наименование группы"
            size="large"
          />
          <el-input
            v-model="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Введите описание"
            style="margin-top: 20px;"
          />
          <el-button type="primary" plain @click="createGroup" class="modal-button"
            >Сохранить</el-button
          >
        </div>
      </div>
    </div>
  </transition>
  <!-- <DraggableCard v-for="group in groups" :key="group.id" :group="group" :imageGroupId="imageGroupId" /> -->
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useImageStore } from "@/store/useImageStore";
import { IPropsModal } from "@/type/index.ts";
import { storeToRefs } from "pinia";
// import DraggableCard from "../DraggbleCard.vue";
const store = useImageStore();
const input = ref("");
const textarea = ref("");
const imageGroupId = ref(null);
defineProps<IPropsModal>();
const emit = defineEmits<{
  (e: "close"): void;
}>();
const { groups } = storeToRefs(store);

const closeModal = () => {
  emit("close");
};

const createGroup = async ()  => {
  if (input.value) {
    store.addGroup(input.value, [], textarea.value);
    let objData = {
        name: input.value,
        comment: textarea.value,
        client_id: 1
      }
      let resp = await store.createGroupPostStore(objData);
      if(resp.success == true){
        imageGroupId.value = resp.image_group_id;
        store.setImageGroupId(imageGroupId);
        closeModal();
        input.value = "";
        textarea.value = "";
      }
  }
};
</script>
