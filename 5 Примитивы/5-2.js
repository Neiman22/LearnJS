"use strict";
console.log("Числа:");

//Степени
let billion = 1e9;
console.log(billion);
let ms = 1e-6;
console.log(ms);
console.log('\n');

//Системы счисления
let a = 0xff;
console.log(a); //255
let b = 0b11111111;
console.log(b); //255
let c = 0o377;
console.log(c); //255
console.log('\n');

//toString() - строковое представление в системе счисления
let num = 255;
console.log(num.toString(2)); //111111
console.log(num.toString(16)); //ff
console.log(254..toString(16)); //fe
console.log('\n');

//Округлени
//Math.floor в меньшую сторону
console.log(Math.floor(3.1)); //3
console.log(Math.floor(-1.1)); //-2
console.log('\n');

//Math.ceil в большую сторону
console.log(Math.ceil(3.1)); //4
console.log(Math.ceil(-1.1)); //-1
console.log('\n');

//Math.round до ближайшего целого
console.log(Math.round (3.5)); //4
console.log(Math.round (-1.1)); //-1
console.log('\n');

//Math.trunc удаление дробной части
console.log(Math.trunc (3.5)); //3
console.log(Math.trunc (-1.1)); //-1
console.log('\n');

//До нужного знака
let znak = 1.25486
console.log(Math.round(znak * 100) / 100); //1.25
console.log(+znak.toFixed(2)); //1.25
console.log('\n');

//Неточные вычисления
console.log(0.1 + 0.2 == 0.3) //false!!!
console.log(0.1 + 0.2 ) //0.30000000000000004
console.log(+(0.1 + 0.2).toFixed(2)); //0.3
console.log('\n');

//Проверка isFinite и isNaN
//Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞
//NaN представляет ошибку
//isNaN преобразует в число и сравнивает с NaN
console.log(isNaN(NaN)); //true
console.log(isNaN('STR')); //true
console.log(isNaN(5)); //false
console.log(NaN === NaN); //false
console.log('\n');

//isFinite преобразует в число и сравнивает с NaN/Infinity/-Infinity
console.log(isFinite(15)); //true - обычное число
console.log(isFinite('str')); //false - NaN
console.log(isFinite(Infinity)); //false
console.log('\n');

//parseInt - значение из строки в системе счисления
console.log(parseInt('100px')); //100
console.log(parseFloat('10.6px')); //10.6
console.log(parseInt('a123')); //NaN
console.log(parseInt('0xff', 16)); //255
console.log('\n');

//Math.random псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
console.log(Math.random());
console.log(Math.max(3, 5, -10, 0, 1)); //5
console.log(Math.min(3, 5, -10, 0, 1)); //-10
console.log(Math.pow(5, 3)); //125
console.log('\n');

//Task
/*
let num2 = +prompt("Enter a number2", '');
let num3 = +prompt("Enter a number3", '');
if (isFinite(num2) && isFinite(num3)) {
  console.log(num2 + num3);
}
*/

console.log(1.35.toFixed(1)); //1.4
console.log(6.35.toFixed(1)); //6.3
console.log((6.35 * 10).toFixed(20)); //6.4!!!
console.log(Math.round(6.35 * 10) / 10)

function readNumber() {
  let num;
  do {
    num = prompt('Enter nymber', 0);
  } while (isFinite(num))

  if (num == '' && num == null) return null

  return +num
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger() {
  let rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
}