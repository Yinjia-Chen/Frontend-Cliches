<!-- filepath: /src/components/Home.vue -->
<template>
  <div>
    <h1>Home Page</h1>
    <button @click="goToAbout">Go to About with Params</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAbout = () => {
  router.push({ name: 'About', params: { id: 123, name: 'Vue3' } });
};
</script>