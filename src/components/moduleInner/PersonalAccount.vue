<template>
    <div class="container">
        <div class="personal" style="margin-top: 40px;">
            <el-card v-for="client in clientStore.clients" :key="client.id" shadow="hover" style="cursor: pointer;" >
                <router-link :to="`/personal-account-details/${client.id}`" style="display: flex; flex-direction: column;">
                    <p style="margin-bottom: 10px;">Имя: {{ client.name }}</p>
                    <p style="margin-bottom: 10px;">Логин: {{ client.login }}</p>
                </router-link>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useImageStore } from "@/store/useImageStore";

const clientStore = useImageStore();
console.log('clients', clientStore.clients)
</script>
