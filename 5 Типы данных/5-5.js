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

//Преобразование в массивах
//map вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции
let lengths = ["Бильбо", "Гэндальф", "Назгул"];
console.log(lengths.map(elem => elem.length)); //[6, 8, 6]
console.log('\n');

//sort сортирует массив на месте, меняя в нём порядок элементов
//по умолчанию элементы сортируются как строки!!!
let arr10 = [ 1, 2, 15 ];
console.log(arr10.sort()); //[1, 15, 2]
console.log('\n'); 

let arr11 = [1, -2, 15, 2, 0, 8];
console.log(arr11);
arr11.sort(function(a, b){
  console.log(a + " <> " + b);
  return a - b;
})
console.log('\n'); 
//использование localeCompare для строк
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort()); //['Andorra', 'Vietnam', 'Österreich']
console.log(countries.sort((a, b) => a.localeCompare(b))); //['Andorra', 'Österreich', 'Vietnam']
console.log('\n'); 

//reverse меняет порядок элементов на обратный
let arr12 = [1, 2, 3, 4, 5];
console.log(arr12.reverse()); //[5, 4, 3, 2, 1]
console.log('\n');

//split и join
//split разбивает строку на массив по заданному разделителю
let names = 'Вася, Петя, Маша';
console.log(names.split(', ')); //['Вася', 'Петя', 'Маша']

//разбивка по буквам
let str = "тест";
console.log(str.split('')); //['т', 'е', 'с', 'т']
console.log('\n');

//reduce/reduceRight используются для вычисления единого значения на основе всего массива
/*
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial)
*/
let arr13 = [1, 2, 3, 4, 5];
console.log(arr13.reduce((sum, curr) => sum + curr, 0)); //15
console.log('\n');

//Array.isArray
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(Array.isArray({})); //false
console.log(Array.isArray([])); //true
console.log('\n');

//arr.some(fn)/arr.every(fn) проверяет массив
//если какие-либо/все результаты вызовов являются true, то метод возвращает true, иначе false

//arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end

//arr.flat(depth)/arr.flatMap(fn) создаёт новый плоский массив из многомерного массива

//Task
function camelize (str) {
  return str
    .split('-')
    .map(function (elem, ind) {
      if (ind == 0) {
        return elem;
      } else {
        return elem[0].toUpperCase() + elem.slice(1);
      }
    })
    .join('');
}
console.log(camelize("background-color")); //'backgroundColor';
console.log(camelize("list-style-image")); //'listStyleImage';
console.log(camelize("-webkit-transition")); // 'WebkitTransition';
console.log('\n');

let arr14 = [5, 2, 1, -10, 8];
console.log(arr14.sort((a, b) => b - a));
console.log('\n');

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b); //[8, 5, 2, 1, -10]
}
console.log('\n');

const copySorted = (arr) => arr.slice().sort();
let arr15 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr15);
console.log(arr15);
console.log(sorted);
console.log('\n');

let arr8 = [5, 3, 8, 1];
let filtered = filterRange(arr8, 1, 4);
console.log(filtered); //3, 1
console.log(arr8); //5,3,8,1
console.log('\n');


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