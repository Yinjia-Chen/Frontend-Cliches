<!-- filepath: /src/components/About.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <p>ID: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <router-link to="/">Go Back to Home</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const { id, name } = route.params;
</script>