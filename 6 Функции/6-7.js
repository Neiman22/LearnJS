"use strict";
console.log("new Function:");
console.log('\n');
//new Function позволяет превратить любую строку в функцию
//такая функция имеет доступ только к глобальным переменным
//let func = new Function([arg1, arg2, ...argN], functionBody);
let sum = new Function('a', 'b', 'return a + b');
console.log(sum(5, 6)); //11
let sayHi = new Function('console.log("Hello")');
sayHi(); //Hello


