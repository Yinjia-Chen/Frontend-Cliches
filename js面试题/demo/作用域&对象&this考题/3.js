var length = 10;
function fn(){
	return this.length + 1;
}
var obj = {
	length:5,
	test1:function(){
		return fn();
	}
}
obj.test2 = fn;
console.log( obj.test1() ); 							 //11
console.log( fn()===obj.test2() ); 				 //false
console.log( obj.test1() == obj.test2() ); //false