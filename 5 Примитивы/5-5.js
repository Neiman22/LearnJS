"use strict";
console.log("Методы массивов:");

//splice
//arr.splice(start[, deleteCount, elem1, ..., elemN])
//изменяет arr начиная с индекса start: удаляет deleteCount элементов и затем вставляет elem1, ..., elemN на их место
//возвращает массив из удалённых элементов

let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1);
console.log(arr); //['Я', 'JavaScript']

let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
console.log(arr2.splice(0, 3, "Давай", "танцевать")); //["Я", "изучаю", "JavaScript"]
console.log(...arr2); //Давай танцевать прямо сейчас

let arr3 = [1, 2, 5]
arr3.splice(-1, 0, 3, 4);
console.log(arr3); //[1, 2, 3, 4, 5]
console.log('\n');

//slice
//возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end)
let arr4 = ["t", "e", "s", "t"];
console.log(arr4.slice(1, 3)); //['e', 's']
console.log(arr4.slice(-2)); //['s', 't']
let arr5 = arr4.slice(); //копия массива
console.log(arr5); //["t", "e", "s", "t"]
console.log('\n');

//concat
//создаёт новый массив, в который копирует данные из других массивов
let arr6 = [1, 2];
console.log(arr6.concat([3,4])); //[1, 2, 3, 4]
console.log(arr6.concat([3, 4], 5, 6)); //[1, 2, 3, 4, 5, 6]
console.log('\n');

//arr.forEach(function(item, index, array) перебор массива

//Поиск в массиве
//indexOf/lastIndexOf и includes
//indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса
//includes(item, from) ищет item начиная с индекса from и возвращает true
//методы используют строгое сравнение ===
//метод includes правильно обрабатывает NaN
const arr7 = [NaN];
console.log( arr7.indexOf(NaN) ); // -1 (неверно, должен быть 0)
console.log( arr7.includes(NaN) );// true (верно)
console.log('\n');

//find и findIndex/findLastIndex
//Метод find ищет один (первый) элемент, который заставит функцию вернуть true
let users = [
  {id: 1, name: "Вася"},
  {id: 1, name: "Петя"},
  {id: 3, name: "Маша"},
  {id: 4, name: "Артем"},
];
let user = users.find(item => item.id == 1);
console.log(user); //{id: 1, name: 'Вася'}
console.log(users.findIndex(item => item.id == 1)); //0
console.log(users.findLastIndex(item => item.id == 1)); //1

//filter
//filter возвращает массив из всех подходящих элементов
let someUsers = users.filter(item => item.id > 1);
console.log(someUsers); //[{id: 3, name: "Маша"}, {id: 4, name: "Артем"}]
console.log('\n');

//Task
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}
let arr8 = [5, 3, 8, 1];
let filtered = filterRange(arr8, 1, 4);
console.log(filtered); //3, 1
console.log(arr8); //5,3,8,1

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr9 = [5, 3, 8, 2, 9, 7, 3, 1];
filterRangeInPlace(arr9, 1, 4);
console.log(arr9); // [3, 2, 3, 1]