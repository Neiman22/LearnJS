"use strict";
console.log("Глобальный объект:");
console.log('\n');
//предоставляет переменные и функции, доступные в любом месте программы

window.console.log('Hello'); //Hello
var gVar = 5;
console.log(window.gVar); //5
let gLet = 6;
console.log(window.gLet); //undefined

//доступ для всей программы
window.currentUser = {
  name: 'Artem',
}
console.log(window.currentUser.name); //Artem
