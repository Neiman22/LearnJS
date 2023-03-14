//динамически типизированный язык программирования

//Number
let n = 123.15;
console.log(n);
console.log('\n');

console.log (1 / 0);
console.log (Infinity); //значение бесконечности
console.log('\n');

console.log ('not number' / 2); //вычислительная ошибка
console.log (NaN + 1);
console.log (3 * NaN);
console.log ('not number' / 2 - 1);
console.log (NaN ** 0);
console.log('\n');

//BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log (bigInt);
console.log('\n');

//String
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут'; 
let phrase = `Обратные кавычки позволяют встраивать переменные: ${str + ' Artem'}`;
console.log (phrase);
console.log('\n');

//Boolean
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
let isGreater = 4 > 1;
console.log (isGreater);
console.log('\n');

//null - «ничего», «пусто» или «значение неизвестно»
let age = null;
console.log (age);
console.log('\n');

//undefined - «значение не было присвоено»
let age2;
console.log (age2);
let age3 = 23;
age3 = undefined
console.log (age3);
console.log('\n');

//symbol
//object

//typeof
console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true) // "boolean"
console.log(typeof "foo") // "string"
console.log(typeof Symbol("id")) // "symbol"
console.log(typeof (Math)) // "object"(1)
console.log(typeof (null)) // "object"(2)
console.log(typeof (alert)) // "function"(3)




