<template>
  <div>
    <h1>父组件</h1>
    <!-- 7.展示后代组件传来的数据 -->
    <p>儿子个数: {{ son }}</p>
    <p>孙子个数: {{ grandson }}</p>
    <!-- 2.在子组件上添加addSon事件监听和handleAddSon处理函数,子组件一调用addSon,父组件就执行handleAddSon -->
    <!-- 若要在父组件上展示孙子等后代组件传入的数据,孙子等后代组件的监听需要逐层套到父组件-->
    <Child @addSon="handleAddSon" @addGrandSon="handleAddGrandSon"></Child>
  </div>
</template>

<script setup lang="ts">
  // 1.引入ref,引入子组件,定义响应式数据
  import { ref } from 'vue';
  import Child from './Child.vue';
  let son = ref(0);
  let grandSon = ref(0);

  // 6.定义父组件在收到后代组件发来的「触发父组件自定义事件」后的操作
  const handleAddSon = () => {
    son.value += 1;
  };
  const handleAddGrandSon = () => {
    grandSon.value += 1;
  };
</script>

<style scoped></style>
