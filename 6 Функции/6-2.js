"use strict";
console.log("Остаточные параметры:");
console.log('\n');

//Остаточные параметры (...)
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2, 3, 4, 5)); //3

function sumAll(...args) { //args - массив
  let sum = 0;
  for (let i of args) sum += i;
  return sum;
}
console.log(sumAll(1)); //1
console.log(sumAll(1, 2)); //3
console.log(sumAll(1, 2, 3, 4, 5)); //15
console.log('\n');

//Переменная "arguments"
//не поддерживает методы массивов
//нет у стрелочной функции
function showNumber() {
  console.log(arguments.length);
  console.log(arguments[1]);
}
showNumber(1); //1, undefined
showNumber(1, 2); //2, 2
console.log('\n');

//Оператор расширения
let arr = [3, 5, 1];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr, ...arr2)); //8
console.log( Math.max(...arr, 25, ...arr2)); //25

let str = "Привет";
console.log( [...str] ); // ['П', 'р', 'и', 'в', 'е', 'т']
console.log( Array.from(str) ); //['П', 'р', 'и', 'в', 'е', 'т']
// Array.from работает как с псевдомассивами, так и с итерируемыми объектами
// Оператор расширения работает только с итерируемыми объектами