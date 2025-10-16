<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ obj }}
    {{ obj.a }} ==> {{ obj.b }} ==> {{ obj.c }}
    <hr />
    <button @click='addBtn'>添加</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      obj:{
        a:1,
        b:2
      }
    }
  },
  methods:{
    addBtn(){
      //数据更新了视图没更新
      //this.obj.c = 3;
      //console.log( this.obj );

      //this.$set( this.obj , 'c' , 3 );
    }
  }
}
</script>
