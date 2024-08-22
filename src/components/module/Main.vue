<template>
  <main>
    <div class="container">
      <Loading :active="loading" />
      <div class="d-flex justify-content-between mt-10">
        <Card :srcList="imagesList3"/>
        <DraggableCard @update="updateImages" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Card from '../moduleInner/Card.vue';
import DraggableCard from '../moduleInner/DraggbleCard.vue';
import Loading from '../ui/Loading.vue';

// const imagesList1 = ref([
//   "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
//   "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
// ]);

// const imagesList2 = ref([
//   "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
//   "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
// ]);

const imagesList3 = ref([
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
]);

const loading = ref(false);

const updateImages = (newImages) => {
  imagesList1.value = newImages.list1;
  imagesList2.value = newImages.list2;
};
</script>
<style scoped>
.mt-10 {
  margin-top: 40px;
}
</style>