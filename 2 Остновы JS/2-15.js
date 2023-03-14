//Функции
let userName = 'Anton' //глобальная переменная
function showMessage () {
    userName = 'Artem'
    let message = 'Hello '; //локальная переменная
    console.log(message + userName); 
}
showMessage (); //'Hello, Artem'
//console.log(message); //Error
console.log(userName); //'Artem
console.log('\n');

//Параметры - переменная указанная в круглых скобках
//Аргумент - значение, которое передается при вызове
function showMessage2 (from, name) {
    name = name + '?';
    console.log(from + ' ' + name); 
}
let name = 'Artem'
showMessage2 ('Hello', name);
console.log (name);
console.log('\n');

//Значение по умолчанию
function showMessage3 (from, name = 'Artem'){
    console.log(from + ' ' + name);
}
showMessage3('Hi');
console.log('\n');

//Возврат значения
function sum (a, b) {
    return a + b;
}
console.log (sum (2, 5)); //7
console.log('\n');
//пустой return === undefined

//Имя функции 
//show - показывать
//get - получать
//calc - вычислять
//create - создавать
//check - проверять

//Task
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
console.log(checkAge(20));
function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
console.log(checkAge2(20));
console.log('\n');

function min (a, b) {
    return a < b ? a : b;
}
console.log(min(2, 5)); //2
console.log(min(3, -1)); //-1
console.log(min(1, 1)); //1
console.log('\n');

function pow (a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result = result * a;
    }
    return result;
}
console.log(pow(3, 2)); //9
console.log(pow(3, 3)); //27
console.log(pow(1, 100)); //1