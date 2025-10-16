<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>


<script setup>

import {  getCurrentInstance } from 'vue'
let app = getCurrentInstance();
console.log( app.appContext.app.config.globalProperties.$loading )

</script>