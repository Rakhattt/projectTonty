<template>
  <div v-for="(item, index) in srcList" :key="index" class="test">
    <div class="demo-image__preview">
      <el-image
        style="width: 250px; height: 250px"
        :src="item"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="[srcList[index]]"
        fit="cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// Принимаем список изображений через props
const props = defineProps({
  srcList: Array
});
</script>
<style scoped>
.test {
  display: flex;
  flex-direction: column;
}
.test2 {
  border: 1px solid #f00;
}
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
