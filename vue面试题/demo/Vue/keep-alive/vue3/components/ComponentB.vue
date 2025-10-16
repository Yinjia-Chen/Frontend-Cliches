<!-- filepath: /src/components/ComponentB.vue -->
<template>
  <div>
    <h2>这是组件 B</h2>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated } from 'vue';

onMounted(() => {
  console.log('组件 B 被创建');
});

onActivated(() => {
  console.log('组件 B 被激活');
});

onUnmounted(() => {
  console.log('组件 B 被销毁');
});
</script>