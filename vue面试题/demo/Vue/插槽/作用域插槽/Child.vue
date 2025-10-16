<template>
  <div>子组件</div>
  <!-- 2.创建插槽 -->
  <!-- 3.绑定数据 -->
  <slot name="header" :arr="arr"></slot>
</template>

<script setup lang="ts">
  // 3.准备要传递的数据
  const arr: Array<string> = ['a', 'b', 'c'];
</script>

<style scoped></style>
