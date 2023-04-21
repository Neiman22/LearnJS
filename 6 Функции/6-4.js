"use strict";
console.log("Var:");
console.log('\n');
//Для «var» не существует блочной области видимости
//Область видимости переменных var ограничивается либо функцией, либо, если переменная глобальная, то скриптом

if (true) {
  var test1 = true; // используем var вместо let
  let test2 = true;
}
console.log(test1); //true
//console.log(test2); //test2 is not defined

//«var» допускает повторное объявление
var user = "Pete";
var user = "Artem";
console.log(user); //Artem

//«hoisting» (всплытие, поднятие)
//все объявления переменных var «всплывают» в самый верх функции в момент объявления
function sayHi() {
  phase = 'Hello';
  if (false) {
    var phase;
  }
  console.log(phase); //Hello
}
sayHi();

//Объявления переменных «всплывают», но присваивания значений – нет
function sayHi2() {
  console.log(phase);
  var phase = 'Hi';
}
sayHi2(); //undefined