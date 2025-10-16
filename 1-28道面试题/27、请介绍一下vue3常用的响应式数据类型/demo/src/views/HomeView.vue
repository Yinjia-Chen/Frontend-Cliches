<template>
  <div class="home">
    {{ sum }}
    <hr />
    {{ obj }}
    <hr />
    {{ name }}
    <hr />
    <button @click='btn'>按钮</button>
  </div>
    
</template>

<script setup>

import { ref , reactive , toRef , toRefs } from 'vue'

let sum = ref(10);

let obj = reactive({
  name:'张三',
  age:18,
  sex:'男'
})

// let name = toRef(obj,'name');
let { name , age } = toRefs(obj);

const btn = ()=>{
  //sum.value = 200;
  //obj.name = '王武'
  name.value = '张小三';
}

</script>
