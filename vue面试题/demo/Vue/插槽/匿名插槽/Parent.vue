<template>
  <div>
    <h1>父组件</h1>
    <!-- 1.引入子组件 -->
    <Child>
      <!-- 3.填充插槽内容 -->
      <p>插槽的内容</p>
    </Child>
  </div>
</template>

<script setup lang="ts">
  import Child from './Child.vue';
</script>

<style scoped></style>
