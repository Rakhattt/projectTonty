<template>
  <div class="container">
    <el-descriptions
      direction="vertical"
      border
      style="margin: 40px 0"
    >
      <el-descriptions-item label="Имя">{{ client?.name }}</el-descriptions-item>
      <el-descriptions-item label="Логин">
        {{ client?.login }}
      </el-descriptions-item>
    </el-descriptions>

    <el-table :data="TableData" border style="width: 100%">
      <el-table-column label="Картинки" min-width="90%">
        <template #default="{ row }">
          <div class="flex gap-2 overflow-auto">
            <el-image
              v-for="(img, index) in row.images"
              :key="index"
              :src="img"
              :preview-src-list="row.images"
              fit="cover"
              class="w-12 h-12 rounded shadow"
              :initial-index="index"
              :preview-teleported="true"
            />
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Действия" min-width="10%">
        <template #default="{ row }">
          <el-button type="primary" @click="openModal(row)">Детали</el-button>
        </template>
      </el-table-column>
  </el-table>

  <el-dialog v-model="modalVisible" title="Детали" class="modal-person-detail">
    <div class="details-modal-content">
      <p>Названия группы: {{ selectedItem?.name }}</p>
      <p>Описания группы: {{ selectedItem?.comment }}</p>
    </div>
  </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import { ref, onMounted, watchEffect } from "vue";
import { ElImage, ElTable, ElTableColumn, ElDialog, ElButton } from "element-plus";
import { useImageStore } from "@/store/useImageStore";
import { useRoute } from "vue-router";

const store = useImageStore();
const route = useRoute();

const TableData = ref([]);
const modalVisible = ref(false);
const selectedItem = ref(null);

const clientId = computed(() => Number(route.params.id));
const client = computed(() => store.clients.find(c => c.id === clientId.value));
console.log('store.clients', store.clients)
const openModal = (item) => {
  selectedItem.value = item;
  modalVisible.value = true;
};
watchEffect(() => {
  console.log("Route ID:", route.params.id);
  console.log("Clients:", store.clients);

  const foundClient = store.clients.find(c => c.id === Number(route.params.id));
  console.log("Found client:", foundClient);

  client.value = foundClient || { name: "Не найден", login: "Не найден" };
});
onMounted(async () => {
  try {
    const data = await store.getImageGroupStore();
    TableData.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
});
</script>
<style>
.w-12 {
  width: 6rem;
  height: 6rem;
  margin-right: 1px;
  border: 1px solid #2667FF;
}
</style>