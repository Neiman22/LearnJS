//Преобразование к строке
let value = true;
console.log (typeof value);
console.log ('\n');

value = String (value);
console.log (typeof value);
console.log (value);
console.log ('\n');

//Преобразование к числу
console.log ('6' / '3');
let str = '123';
console.log(str);
let num = Number(str);
console.log(num);
console.log ('\n');

//NaN
let age = Number ('String'); //NaN
console.log (age);
age = Number (undefined); //NaN
console.log (age);
age = Number (null); //0
console.log (age);
age = Number (true); //1
console.log (age);
age = Number (false); //0
console.log (age);
age = Number ('   123   '); //123
console.log (age);
age = Number ('   123z   '); //NaN
console.log (age);
age = Number (' '); //0
console.log (age);
console.log ('\n');

//Логические преобразования
//false
console.log (Boolean(0));
console.log (Boolean(null));
console.log (Boolean(undefined));
console.log (Boolean(NaN));
console.log (Boolean(''));
console.log ('\n');

console.log (Boolean('0'));
console.log (Boolean(' '));