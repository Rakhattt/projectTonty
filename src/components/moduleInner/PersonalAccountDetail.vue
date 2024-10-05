<template>
  <div class="container">
    <el-descriptions
      direction="vertical"
      border
      style="margin: 40px 0"
    >
      <el-descriptions-item label="Имя">Рахат</el-descriptions-item>
      <el-descriptions-item label="Логин">
        rakhat01
      </el-descriptions-item>
    </el-descriptions>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="animals" width="180">
        <template v-slot="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </template>
      </el-table-column>
      <el-table-column prop="name" label="Фрукты" width="180" >
        <template v-slot="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </template>
      </el-table-column>
      <el-table-column prop="address" label="Транспорт" width="250">
        <template v-slot="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </template>
      </el-table-column>
      <el-table-column prop="address" label="Вещи" width="250" >
        <template v-slot="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </template>
      </el-table-column>
      <el-table-column prop="address" label="Ягоды" >
        <template v-slot="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
        {
          url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
        {
          url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
        {
          url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
      ]
</script>
