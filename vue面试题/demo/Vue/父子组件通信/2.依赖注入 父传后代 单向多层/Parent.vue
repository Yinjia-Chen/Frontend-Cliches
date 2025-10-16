<template>
  <div>
    <h1>父级</h1>
    <button @click="updateReactiveName">更新响应式Name</button>
    <Child></Child>
  </div>
</template>

<script setup lang="ts">
  // 搭建父子级结构
  import Child from './Child.vue';
  // 引入ref、provide依赖提供函数
  import { provide } from 'vue';

  // 静态依赖
  const staticName = 'Kya';
  provide('StaticName', staticName); // provide('注入名', value)
  // app.provide('name', "Kya"); // 在main.ts入口文件中提供全局依赖

  // 响应式依赖
  const reactiveName = ref('K');
  provide('ReactiveName', reactiveName);

  // 更新按钮回调
  const updateReactiveName = () => {
    reactiveName.value = '响应式数据由K修改为Kya';
  };
</script>

<style scoped></style>
