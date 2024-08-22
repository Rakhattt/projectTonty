<template>
    <div>
      <h2>Sign In</h2>
      <form @submit.prevent="signIn">
        <label>Email:</label>
        <input type="email" v-model="email" required />
  
        <label>Password:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Sign In</button>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const signIn = () => {
    // Логика аутентификации
    if (email.value === 'test@example.com' && password.value === 'password') {
      router.push({ name: 'main' });
    } else {
      alert('Invalid credentials');
    }
  };
  </script>
  