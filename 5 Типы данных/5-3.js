"use strict";
console.log("Строки:");

//Многострочный текст
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList);

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);
console.log('\n');

//Кавычка
console.log('I\'m Artem');
console.log(`I'm Artem`);
console.log('\n');

//Длина строки
console.log('My\n'.length); //3
console.log('\n');

//Доступ к символам
let str = `Hello`;
console.log(str[0]); //H
console.log(str.at(1)); //e
console.log(str[str.length - 1]); //o
console.log(str.at(-1)); //o
console.log('\n');

//Строки не изменяемы
let str2 = 'Hi';
//str2[0] = 'h'; //Error
str2 = 'h' + str2[1];
console.log(str2);
console.log('\n');

//Поиск подстроки
//str.indexOf(substr, pos) возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений
let str3 = 'Widget with id';
console.log(str3.indexOf('Widget')); //0
console.log(str3.indexOf('widget')); //-1
console.log(str3.indexOf('id')); //1
console.log(str3.indexOf('id', 2)); //12
console.log('\n');

//Поиск всех подстрок
//str.lastIndexOf
let str4 = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";
let pos = -1;
while ((pos = str4.indexOf(target, pos +1)) != -1) {
  console.log(pos); // 6 9
}
console.log('\n');

//Метод includes возвращает true, если в строке str есть подстрока substr, либо false, если нет
//str.includes(substr, pos)
console.log("Widget with id".includes("Widget")); //true
console.log('\n');

//Получение подстроки
//str.slice(start, end) возвращает часть строки от start до (не включая) end
let str5 = "stringify";
console.log(str5.slice(0, 5)); //strin
console.log(str5.slice(5)); //gify
console.log(str5.slice(-4, -1)); //gif
console.log('\n');

//str.substr(start, length) возвращает часть строки от start длины length
console.log(str5.substr(2, 4)); //ring
console.log(str5.substr(-5, 4)); //ngif
console.log('\n');

//Код для символа
console.log('z'.charCodeAt(0)); //122
console.log('Z'.charCodeAt(0)); //90
console.log(String.fromCodePoint(90)); //Z

let str6 = '';

for (let i = 65; i <= 220; i++) {
  str6 += String.fromCodePoint(i);
}
console.log(str6);
console.log('\n');

//Task1
const ucFirst = str => str[0].toUpperCase() + str.slice(1)
console.log(ucFirst("вася")); // "Вася"
console.log('\n');

//Task2
const checkSpam = str => str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
console.log(checkSpam('buy ViAgRA now')); //true
console.log(checkSpam('free xxxxx')); //true
console.log(checkSpam("innocent rabbit")); //false
console.log('\n');

//Task3
function truncate (str, maxLength) {
  return (str.length > maxLength) ? 
    str.slice(0, maxLength - 1) + '...' : str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // "Вот, что мне хотело…"
console.log(truncate("Всем привет!", 20)); //"Всем привет!"
console.log('\n');

//Task4
const extractCurrencyValue = (str) => +str.slice(1);
console.log(extractCurrencyValue('$120')); //120;




