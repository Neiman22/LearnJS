"use strict";
console.log("Set Timeout:");
//setTimeout позволяет вызвать функцию один раз через определённый интервал времени
//let timerId = setTimeout(func, [delay], [arg1], [arg2], ...);
//func - Функция для выполнения
//delay - Задержка перед запуском в миллисекундах
//arg1, arg2 - Аргументы, передаваемые в функцию
function sayHi(phase, name) {
  console.log(phase + ', ' + name + '!');
}
setTimeout(sayHi, 5000, 'Hello', 'Artem');// Hello, Artem!

//clearTimeout
let timeId = setTimeout(() => console.log('Nothing happens'), 3000);
console.log(timeId); //2
clearTimeout(timeId);
console.log(timeId); //2
console.log('\n');

//setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени
let timeId2 = setInterval(() => console.log('Click'), 2000);
setTimeout(() => {
  clearTimeout(timeId2);
  console.log('Stop Click');
}, 10000);

//Вложенный setTimeout
let timeId3 = setTimeout(function tick(){
  console.log('Tick');
  timeId3 = setTimeout(tick, 2000);
}, 2000);
setTimeout(() => {clearTimeout(timeId3); console.log('Stop Tick');}, 20000);


//Task1
console.log('Task1');
console.log('\n');
function printNumbers(from, to) {
  let num = from;
  setTimeout(function go() {
    console.log(num);
    if (num < to) {
      setTimeout(go, 1000);
    };
    num++;
  }, 1000)
  
}
printNumbers(1, 9);

function printNumbers2(from, to) {
  let num = from;
  let timeID = setInterval(() => {
    console.log(num);
    if (num == to) clearInterval(timeID);
    num++;
  }, 1000)
  
}
printNumbers2(1, 7);
