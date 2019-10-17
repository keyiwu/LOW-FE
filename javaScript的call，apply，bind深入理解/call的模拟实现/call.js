/**
 *模拟call的步骤
 *将函数变为对象的属性
 * 执行函数
 * 删除函数
 */

Function.prototype.call2 = function name (context) {
  // 首先要获取调用call的函数，用this可以获取
  console.log('this', this)
  context.fn = this;
  // 执行函数
  context.fn();
  // 删除函数
  delete context.fn;

}
var foo = {
  value: 1
}
function bar () {
  console.log(this.value);
}
bar.call2(foo);