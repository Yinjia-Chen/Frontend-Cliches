<template>
  <div>
    <h2>这是组件 B</h2>
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  created() {
    console.log('组件 B 被创建');
  },
  destroyed() {
    console.log('组件 B 被销毁');
  }
};
</script>