"use strict";
console.log("Встроенные прототипы");

let obj = {};
console.log(obj); //[object Object]
console.log(obj.__proto__ === Object.prototype); //true
console.log('\n');

let arr = [1, 2, 3];
console.log(arr.__proto__ == Array.prototype); //true
console.log(arr.__proto__.__proto__ == Object.prototype); //true
console.log(arr.__proto__.__proto__.__proto__); //null
console.dir([1, 2, 3]);
console.log('\n');

function f() {}
console.log(f.__proto__ == Function.prototype); //true
console.log(f.__proto__.__proto__ == Object.prototype); //true
console.log('\n');

//Примитивы
//Создается временный объект-обёртка с использованием встроенных конструкторов


//Полифил – это термин, который означает эмуляцию метода
if(!String.prototype.repeat) {
  String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this)
  }
}
console.log("La".repeat(3));
console.log('\n');

let obj2 = {
  0: "Hello",
  1: "Artem!",
  length: 2,
};

//Заимствование у прототипов
obj2.join = Array.prototype.join;
console.log(obj2.join(', ')); //Hello, Artem!
console.log('\n');

//Task1
console.log('Task1');
function fun() {
  console.log('Hello!');
}

if(!Function.prototype.defer) {
  Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  }
}
fun.defer(2000); //'Hello'

//Task2
if(!Function.prototype.defer2) {
  Function.prototype.defer2 = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms)
    }
  }
}
function fun2 (a, b) {
  console.log( a + b );
}
fun2.defer2(4000)(5, 8); //13