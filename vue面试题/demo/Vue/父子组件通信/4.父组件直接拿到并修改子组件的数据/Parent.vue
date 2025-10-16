<template>
  <div>
    <h1>父组件</h1>
    <!-- 8.{{子组件数据变量名}}展示来自子组件的数据 -->
    <p>来自子组件的数据:{{ childData }}</p>
    <button @click="changeChildData">修改子组件的数据</button>
    <!-- 2.在子组件上添加ref引用 -->
    <Child ref="childRef"></Child>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Child from './Child.vue';

  // 1.创建一个空 ref 来引用子组件
  const childRef = ref(null);

  // 6.创建一个变量存放子组件的数据
  const childData = ref('');

  // 5.定义父组件修改子组件数据的函数
  const changeChildData = () => {
    if (childRef.value) {
      childRef.value.childData.value = '已修改'; // 注:父组件拿到响应式子组件数据的方式:引用名.value.子组件数据变量名.value
    }
  };

  // 7.组件挂载后获取子组件的数据
  onMounted(() => {
    if (childRef.value) {
      childData.value = childRef.value.childData.value;
    }
  });
</script>

<style scoped></style>
