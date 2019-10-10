function sum () {
  console.log('sum this', this);
}
function fn () {
  console.log('fn this', this);
}
var obj = {
  name: 'wky'
};
Function.prototype.myCall = function (context) {
  // myCall 方法中的this就是当前我要操作和改变其this关键字的那个函数名

  // 1.让fn中的this关键字变为context的值->obj
  // 让this这个函数的”this关键字“变为context
  // eval（this.toString().replace("this","obj")）

  // 2.让fn方法在执行
  // this()
}
fn.myCall(obj); // myCall方法中原来的this是fn
sum.myCall(obj); // myCall 方法中原来的this是sum