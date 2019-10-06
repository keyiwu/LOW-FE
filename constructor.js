/**
 * 1.什么是构造函数
 * 2.构造函数的作用是什么
 * 3.构造函数的执行过程是什么
 * 4.构造函数的返回值是什么
 */



/* 1.什么是构造函数
*  在js中，用new关键字调用的函数就是构造函数
*/
// 一般函数 声明之后直接使用
function Student () {
  console.log('我是学生')
}
Student();
// 函数声明之后，通过new调用才是构造函数
function Person () {

}
let person = new Person(); // 此时的Person就是构造函数


/**
 * 2.为什么要用构造函数
 * 函数是为了解决那些重复性，具有共性的问题
 * 编程里面的认为一切对象，什么都可以用对象来表示
 * 假如我们将每个人当成一个对象，收集人的信息就需要写无数个对象，此时我们就可以将共性提取出来，特殊的进行特殊处理，用构造函数创建对象，实现代码的复用
 */
function Person2 (name, sex, age, height) {
  this.name = name;
  this.sex = sex;
  this.age = age;
  this.height = height;
  this.say = function () {
    console.log("hello world");
  }
}
let lilei = new Person2("李磊", '男', 18, '163cm');
console.log(lilei.name);
console.log(lilei.sex);
console.log(lilei.age);
console.log(lilei.height);
/**
 * 3. 构造函数的执行顺序
 * 当我们定义了一个函数的时候，我们并不知道它是不是构造函数，只有这个函数被 new 关键字使用的时候，我们才知道此函数是关键字
 * （1）当Person2 被new的时候，创建了一个对象，即创建了一个内存空间，lilei指向了这个块内存空间（或者这个实例的用lilei打了一个标签）
 *  (2)函数体内的this指向了这块内存空间
 *  (3)然后执行函数体内部的属性赋值操作，将name，sex，age，height的值赋值给该内存的this属性
 *  (4)最后函数执行完毕，返回该内存空间，相当于返回了this，这块内存空间是该Person2构造函数的一个实例（lilei就是Person2的一个实例）
 */

let hmm = new Person2("韩梅梅", "女", 17, '160cm');
console.log(hmm.name);
console.log(hmm.sex);
console.log(hmm.age);
console.log(hmm.height);
// 此时创建了一个新内存空间，标签为hmm，这个标签指向的是Person2的实例，默认返回的也是名为hmm的内存空间
/**
 * 4.构造函数的返回值
 */

//  (1) 默认返回this,指向new构造函数创建的内存空间
// （2）可以进行手动更改返回值
    // ① 手动返回值更改为原始类型（primitive）: boolean，undefined，null，number，symbol，string
    // ② 手动返回值更改为引用类型: Array，Object，Function
