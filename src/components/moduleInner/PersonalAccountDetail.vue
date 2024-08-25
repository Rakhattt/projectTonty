<template>
  <div class="container">
    <el-descriptions
      direction="vertical"
      border
      style="margin: 40px 0"
    >
      <el-descriptions-item
        :rowspan="2"
        :width="140"
        label="Photo"
        align="center"
      >
        <el-image
          style="width: 100px; height: 100px"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </el-descriptions-item>
      <el-descriptions-item label="Имя">Рахат</el-descriptions-item>
      <el-descriptions-item label="Логин">
        <el-tag size="small">rakhat01</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="animals" width="180" />
      <el-table-column prop="name" label="Фрукты" width="180" />
      <el-table-column prop="address" label="Транспорт" width="250">
      </el-table-column>
      <el-table-column prop="address" label="Вещи" width="250" />
      <el-table-column prop="address" label="Ягоды" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    address:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
  },
  {
    date: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    address:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
  },
  {
    date: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    address:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
  },
  {
    date: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    address:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
  },
];
</script>
