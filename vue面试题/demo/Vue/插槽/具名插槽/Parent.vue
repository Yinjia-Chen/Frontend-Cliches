<template>
  <div>
    <h1>父组件</h1>
    <!-- 1.引入子组件 -->
    <Child>
      <!-- 3.根据子组件的插槽个数和命名填充内容,注意要套template模板标签,同时在template中用 #xxx 对应具名插槽 -->
      <template #header>
        <p>上方的插槽</p>
      </template>
      <template #footer>
        <p>下方的插槽</p>
      </template>
    </Child>
  </div>
</template>

<script setup lang="ts">
  import Child from './Child.vue';
</script>

<style scoped></style>
