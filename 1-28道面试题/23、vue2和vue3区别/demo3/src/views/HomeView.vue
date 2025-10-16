<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ obj }}
    {{ obj.a }} ==> {{ obj.b }} ==> {{ obj.c }}
    <hr />
    <button @click='addBtn'>添加</button>
  </div>
</template>


<script setup>
import { reactive } from 'vue'
let obj = reactive({
  a:1,
  b:2
});

const addBtn = ()=>{
  obj.c = 3;
}

</script>
