watch:{
  obj:{
    handler(newVal,oldVal){
      console.log( 'obj',newVal , oldVal )
    },
    immediate:true,
    deep:true
  },
}

obj：监听目标
handler：默认当监听对象本身发生改变时触发handler函数
immediate：初始化监听，监听开始后立即执行handler
deep：当监听目标是字符串等基本数据类型，此项无效；当监听目标是对象时，直接修改对象本身才触发handler，当且仅当deep:true时，修改对象身上的属性时才会触发handler