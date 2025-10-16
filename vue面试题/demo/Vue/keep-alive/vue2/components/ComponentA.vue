<template>
  <div>
    <h2>这是组件 A</h2>
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  created() {
    console.log('组件 A 被创建');
  },
  destroyed() {
    console.log('组件 A 被销毁');
  }
};
</script>