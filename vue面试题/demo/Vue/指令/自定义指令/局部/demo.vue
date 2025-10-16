<template>
  <div>
    <h1 v-demo="'green'">局部自定义指令示例</h1>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  // 定义局部指令
  const directives = {
    demo: {
      mounted(el, binding) {
        console.log('局部指令 mounted:', el, binding);
        el.style.color = binding.value || 'green'; // 设置元素颜色
      }
    }
  };
</script>

<script>
  export default {
    directives // 将局部指令注册到组件中
  };
</script>