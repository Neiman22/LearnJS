"use strict";
console.log("Числа:");

//Степени
let billion = 1e9;
console.log(billion);
let ms = 1e-6;
console.log(ms);

//Системы счисления
let a = 0xff;
console.log(a); //255
let b = 0b11111111;
console.log(b); //255
let c = 0o377;
console.log(c); //255

//toString() - строковое представление в системе счисления
let num = 255;
console.log(num.toString(2)); //111111
console.log(num.toString(16)); //ff
console.log(254..toString(16)); //fe

//Округлени
//Math.floor в меньшую сторону
console.log(Math.floor(3.1)); //3
console.log(Math.floor(-1.1)); //-2

//Math.ceil в большую сторону
console.log(Math.ceil(3.1)); //4
console.log(Math.ceil(-1.1)); //-1

//Math.round до ближайшего целого
console.log(Math.round (3.5)); //4
console.log(Math.round (-1.1)); //-1

//Math.trunc удаление дробной части
console.log(Math.trunc (3.5)); //3
console.log(Math.trunc (-1.1)); //-1

//До нужного знака
let znak = 1.25486
console.log(Math.round(znak * 100) / 100); //1.25
console.log(+znak.toFixed(2)); //1.25
