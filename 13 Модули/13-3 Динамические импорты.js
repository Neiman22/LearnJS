'use strict';
console.log('Динамические импорты');
//Выражение import(module) загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты.

//динамический импорт
let {sayHi, bye} = await import('./sayHi.js');
sayHi('Artem'); //Hello Artem
bye('Anton'); //Bye Anton

//динамический импорт default
let obj = await import('./sayHi.js');
let Say = obj.default;
let newUser = new Say('Sergey'); //New User: Sergey
