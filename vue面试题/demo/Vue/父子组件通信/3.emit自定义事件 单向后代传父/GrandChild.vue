<template>
  <div>
    <h3>孙子组件</h3>
    <button @click="triggerAddGrandSon">孙子出生</button>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue';

  const emit = defineEmits(['addGrandSon']);
  const triggerAddGrandSon = () => {
    emit('addGrandSon');
  };
</script>

<style scoped></style>
