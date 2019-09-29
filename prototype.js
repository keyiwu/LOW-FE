/**
 * 只有function才有prototype属性
 * js的基本数据（base）类型：原始类型&&引用类型
 * js的原始数据（Primitive）类型:boolean，number，undefined，null，Symbol，string
 * js的引用数据类型
 * 
 */

function printTypeName (str, data) {
  let typeName = Object.prototype.toString.call(data);
  console.log(str, typeName);
}
printTypeName('string', String); // string [object Function]
printTypeName('Object', Object); // Object [object Function]
printTypeName('Number', Number); // Number [object Function]
printTypeName('Boolean', Boolean); // Boolean [object Function]
printTypeName('Array', Array); // Array [object Function]
printTypeName('symbol', Symbol); // symbol [object Function]
printTypeName('null', null); // null [object Null]
printTypeName('undefined', undefined); // undefined [object Undefined]
