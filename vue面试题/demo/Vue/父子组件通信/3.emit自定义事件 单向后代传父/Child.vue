<template>
  <div>
    <h2>子组件</h2>
    <!-- 4.子组件中设计事件触发自定义事件 -->
    <button @click="triggerAddSon">儿子出生</button>
    <!-- 注:跨层传递时要在上一层套上$emit('监听的事件名称', 参数) -->
    <GrandChild @addGrandSon="$emit('addGrandSon')"></GrandChild>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue';
  import GrandChild from './GrandChild.vue';
  // 3.子组件用defineEmits声明可以触发父组件中的自定义事件addSon
  const emit = defineEmits(['addSon']);
  // 5.子组件点击事件,向父组件发送触发addSon自定义事件的信息
  const triggerAddSon = () => {
    emit('addSon');
  };
</script>

<style scoped></style>
