"use strict";
console.log("Объект функции:");
console.log('\n');
//Свойство «name»
function sayHi() {
  console.log('Hello');
}
console.log(sayHi.name); //sayHi
console.log('\n');

//Свойство «length»
function f1(a) {}
function f2(a, b) {}
function f3(a, b, ...more) {}
console.log(f1.length); //1
console.log(f2.length); //2
console.log(f3.length); //3
console.log('\n');

//Пользовательские свойства
function sayHello(){
  console.log('Hi');
  sayHello.counter++;
}
sayHello.counter = 0;
sayHello();
sayHello();
console.log(`Вызвана ${sayHello.counter} раз`);
console.log('\n');

//Named Function Expression
//Позволяет функции ссылаться на себя же
//Не доступно за пределами функции
let sayFunc = function func(who) {
  if(who) {
    console.log(`Hello ${who}`);
  } else {
    func('Guest');
  }
}
let welcome = sayFunc;
sayFunc = null;
welcome();
//sayFunc(); Error
console.log('\n');

//Task1
console.log("Task1:");
function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = (value) => count = value;
  counter.decrease = () => count--;
  return counter;
}

let counter = makeCounter();
console.log( counter() ); //0
console.log( counter() ); //1
counter.set(10); // установить новое значение счётчика
console.log( counter() ); // 10
counter.decrease(); // уменьшить значение счётчика на 1
console.log( counter() ); // 10 (вместо 11)
console.log('\n');

//Task2
console.log("Task2:");
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2)); //3;
console.log(sum(1)(2)(3)); //6
console.log(sum(5)(-1)(2)); //6
console.log(sum(6)(-1)(-2)(-3)); //0
console.log(sum(0)(1)(2)(3)(4)(5)); //15