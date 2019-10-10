function Fn () {
  var num = 500;
  this.x = 100;
}
Fn.prototype.getX = function () {
  console.log(this.x);
}
Fn.aaa = 1000;
var f = new Fn;
console.log(f.num);
console.log(f.aaa);
var res = Fn();
