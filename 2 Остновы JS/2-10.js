//Инструкция if
//0, '', null, undefined, NaN - false

let year = prompt('What year was ECMAScript5 released?');
if (year < 2015) {
    console.log('This is too early');
} else if (year > 2015) {
    console.log('It is too late');
} else {
    console.log('Right!');
}

//Оператор ? тернарный
let age = prompt('Enter your age: ');
let message = (age < 3) ? 'Hello baby!':
    (age < 18) ? 'Hi!' :
    (age < 100) ? 'Hello!' :
    'You are a long-liver!';
console.log(message);

//Task
let num = prompt ('Enter number');
if (num > 0) {
    console.log (1)
} else if (num < 0) {
    console.log (-1)
} else {
    console.log (0)
}

let result = (a + b < 4) ? 'Small' : 'Big';

let mess = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : 
    '';