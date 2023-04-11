"use strict";
console.log("Object.keys, values, entries:");
console.log('\n');
//Методы поддерживаются для структур: Map, Set, Array
//Object.keys(obj) – возвращает массив ключей
//Object.values(obj) – возвращает массив значений
//Object.entries(obj) – возвращает массив пар [ключ, значение]
//методы игнорируют свойства, использующие Symbol(...)

let user = {
  name: "John",
  age: 30
};
console.log(Object.keys(user)); //['name', 'age']
console.log(Object.values(user)); //['John', 30]
console.log(Object.entries(user)); //['name', 'John'], ['age', 30]

for (let key of Object.values(user)){
  console.log(key); //'John', 30
}
console.log('\n');

//Трансформации объекта
//Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj
//На нём вызываем методы массива, например, map
//Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
)
console.log(doublePrices); //banana: 2, orange: 4, meat: 8}
console.log('\n');

//Task1
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries (obj) {
  let sum = 0;
  for (let val of Object.values(obj)){
    sum += val;
  }
  return sum
}

function sumSalariesRed (obj) {
  return Object.values(obj).reduce((sum, el) => sum + el, 0);
}
console.log(sumSalaries(salaries)); // 650
console.log(sumSalariesRed(salaries)); // 650
console.log('\n');

//Task2
let user2 = {
  name: 'John',
  age: 30
};
const count = (obj) => Object.keys(obj).length;
console.log(count(user)); // 2

