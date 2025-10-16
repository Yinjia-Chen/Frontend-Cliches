<!-- filepath: /src/components/ComponentA.vue -->
<template>
  <div>
    <h2>这是组件 A</h2>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated } from 'vue';

onMounted(() => {
  console.log('组件 A 被创建');
});

onActivated(() => {
  console.log('组件 A 被激活');
});

onUnmounted(() => {
  console.log('组件 A 被销毁');
});
</script>