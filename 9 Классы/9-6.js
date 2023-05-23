"use strict";
console.log(`Проверка класса: "instanceof"`);

class Rabbit {};
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit); //true

let arr = [1, 2, 3];
console.log(arr instanceof Array); //true
console.log(arr instanceof Object); //true
console.log('\n')

//Object.prototype.toString возвращает тип
let obj = {};
console.log(obj); //{}
console.log(obj.toString()); //[object Object]

let objectToString = Object.prototype.toString;
let arr2 = [];
console.log(objectToString.call(arr2)); //[object Array]

let s = Object.prototype.toString;
console.log(s.call(123)); //[object Number]
console.log(s.call(null)); //[object Null]
console.log(s.call(alert)); //[object Function]
console.log('\n');

//Symbol.toStringTag
let user = {
  [Symbol.toStringTag]: 'User',
}
console.log( {}.toString.call(user)); //[object User]
console.log('\n');

//Task1
console.log('Task1:');
function A() {}
function B() {}
A.prototype = B.prototype = {};
let a = new A();
console.log( a instanceof B );
