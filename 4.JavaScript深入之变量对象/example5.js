function test (person) {
  person.age = 28;
  person = {
    age: 30,
    name: 'zhangsan'
  }
  return person;
}
const p1 = {
  name: '李四',
  age: 25
}
let p2 = new test(p1);
console.log(p1); // { name: '李四',age: 25}
console.log(p2); // { age: 30, name: 'zhangsan' }