<script setup>
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <router-link :to="{ name: 'User', params: { id: 1 } }">查看用户 1</router-link>
  </div>
</template>