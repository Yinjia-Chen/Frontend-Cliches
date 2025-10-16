<template>
  <div>
    <h2>子组件</h2>
    <!-- 2.添加多个插槽,插槽命名用 name="xxx" -->
    <slot name="header"></slot>
    <input type="text" placeholder="用输入框隔断显示上下插槽" />
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
