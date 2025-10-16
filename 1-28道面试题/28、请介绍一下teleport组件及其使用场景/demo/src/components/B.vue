<template>
	<div style="background: blue;flex:1;" class='box'>
		右边
		<button @click='btn'>按钮</button>
		<teleport to='body'>
			<div class='mo' v-if='show'></div>
		</teleport>
	</div>
</template>

<script setup>
import { ref } from 'vue'
let show = ref(false);
const btn = ()=>{
	show.value=true;
}
</script>
<style>
.box{
	position: relative;
}
.mo{
	width: 300px;
	height: 300px;
	background: orange;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -150px;
	margin-top: -150px;
}
</style>