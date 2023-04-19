"use strict";
console.log("Замыкания:");
console.log('\n');

let name1 = "John";
function sayHi() {
  console.log(name1);
}
name1 = 'Pete';
sayHi(); //Pete

function makeWoker() {
  let name = 'Artem'
  return function() {
    console.log(name)
  }
}
let name2 = 'Anton';
let work = makeWoker();
work(); //Artem

//Объект лексического окружения состоит из двух частей:
//Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).
//Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).
//У глобального лексического окружения нет внешнего окружения, так что она указывает на null
//У внутреннего лексического окружения есть ссылка на внешнее
console.log('\n');

//Вложенные функции
function User(name) {
  this.sayHi = function() {
    console.log(name)
  }
}
let user = new User('Artem');
user.sayHi(); //Artem

function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  }
}
let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
console.log(counter()); //4
console.log(counter2()); //1
console.log('\n');

//Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ
//IIFE - функцию, запускаемую сразу после объявления
(function() {

  let message = "Hello";

  console.log(message); // Hello

})();
console.log('\n');

//Task1
function sum(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum(1)(2)); //3
console.log(sum(5)(-1)); //4
console.log('\n');

//Task2
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween (a, b) {
  return function(x) {
    return x >= a && x <= b;
  }
}
function inArray (arr) {
  return function(x) {
    return arr.includes(x)
  }
}
console.log( arr.filter(inBetween(3, 6)) ); //3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) ); //1,2

//Task3
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
const byField = (key) => (a, b) => a[key] - b[key];
console.log(users.sort(byField('age'))); //Сортировка по возрасту
console.log('\n');

function makeArmy() {
  let shooters = [];

  let i = 0;
  for(let i = 0; i < 10; i++) {
    let shooter = function() { // функция shooter
      console.log( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5]();