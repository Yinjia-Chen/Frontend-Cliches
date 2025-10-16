<script setup>
import { ref } from 'vue';

// 定义当前显示的组件
const currentView = ref('ComponentA');
</script>

<template>
  <div id="app">
    <h1>Vue 3 Keep-Alive 示例</h1>
    <button @click="currentView = 'ComponentA'">显示组件 A</button>
    <button @click="currentView = 'ComponentB'">显示组件 B</button>

    <!-- 使用 keep-alive 缓存组件 -->
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 14px;
}
</style>