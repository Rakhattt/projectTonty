<template>
  <section>
    <div>
      <nav>
        <ul class="breadcrumb">
          <li class="breadcrumb-item text-muted">
            <router-link to="/" class="text-muted text-hover-primary"
              >Главная</router-link
            >
          </li>
          <li class="breadcrumb-item" style="color: #5683ed;">
            {{ pageTitle }}
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageTitle = computed(() => route.meta.pageTitle);
</script>
