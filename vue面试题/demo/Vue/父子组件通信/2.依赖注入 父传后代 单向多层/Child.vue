<template>
  <div>
    <h2>子级</h2>
    <!-- 展示注入的数据 -->
    <p>静态名称：{{ staticName }}</p>
    <p>响应式名称：{{ reactiveName.value }}</p>
    <GrandChild></GrandChild>
  </div>
</template>

<script setup lang="ts">
  // 搭建子孙级结构
  import GrandChild from './GrandChild.vue';
  // 引入inject注入函数
  import { inject } from 'vue';
  // 注入静态数据
  const staticName = inject<string>('StaticName');
  // 注入响应式数据
  const reactiveName = inject<ReturnType<typeof ref<string>>>('ReactiveName');
</script>

<style scoped></style>
