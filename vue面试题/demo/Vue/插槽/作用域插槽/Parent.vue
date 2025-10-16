<template>
  <div>父组件</div>
  <!-- 1.引入子组件 -->
  <Child>
    <!-- 5.用template填充插槽内容 -->
    <!-- 6. #具名="{变量}" #具名="{变量1, 变量2, ...}"-->
    <template #header="{ arr }">
      <div v-for="(item, index) in arr">{{ item }}</div>
    </template>
  </Child>
</template>

<script setup lang="ts">
  import Child from './Child.vue';
</script>

<style scoped></style>
