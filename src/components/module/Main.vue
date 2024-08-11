<template>
  <main>
    <div class="container">
      <Loading :active="loading" />
      <DraggableCard :list1="imagesList1" :list2="imagesList2" @update="updateImages" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DraggableCard from './DraggableCard.vue';
import Loading from './Loading.vue';

const imagesList1 = ref([
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
]);

const imagesList2 = ref([
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
]);

const loading = ref(false);

const updateImages = (newImages) => {
  imagesList1.value = newImages.list1;
  imagesList2.value = newImages.list2;
};
</script>
