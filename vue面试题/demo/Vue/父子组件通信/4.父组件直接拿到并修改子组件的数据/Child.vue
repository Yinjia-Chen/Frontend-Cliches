<template>
  <div>
    <h2>子组件</h2>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // 3.子组件准备要传递给父组件的数据
  const childData = ref('子组件的数据');
  // 4.将准备好的数据暴露给父组件
  defineExpose({
    childData,
  });
</script>

<style scoped></style>
