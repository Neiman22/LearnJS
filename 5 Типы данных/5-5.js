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

//Task1
console.log('Task1');
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

//Task2
console.log('Task2');
let arr8 = [5, 3, 8, 1];
let filtered = filterRange(arr8, 1, 4);
console.log(filtered); //3, 1
console.log(arr8); //5,3,8,1
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b); //[8, 5, 2, 1, -10]
}
console.log('\n');

//Task3
console.log('Task3');
let arr9 = [5, 3, 8, 2, 9, 7, 3, 1];
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filterRangeInPlace(arr9, 1, 4);
console.log(arr9); // [3, 2, 3, 1];
console.log('\n');

//Task4
console.log('Task4');
let arr14 = [5, 2, 1, -10, 8];
console.log(arr14.sort((a, b) => b - a)); // 8, 5, 2, 1, -10
console.log('\n');

//Task5
console.log('Task5');
const copySorted = (arr) => arr.slice().sort();
let arr15 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr15);
console.log(arr15);
console.log(sorted);
console.log('\n');

//Task6
console.log('Task6');
function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }

  this.calculate = function (str) {
    let arr = str.split(' ');
    let a = +arr[0];
    let b = +arr[2];
    let math = arr[1];
    return this.methods[math](a, b);
  }
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }
}
let calc = new Calculator;
console.log( calc.calculate("35 + 7") ); //42
console.log( calc.calculate("35 - 7") ); //28

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("2 ** 3")); //8
console.log('\n');

//Task7
console.log('Task7');
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users2 = [ vasya, petya, masha ];
let names2 = users2.map(el => el.name)
console.log( names2 ); // [Вася, Петя, Маша]
console.log('\n');

//Task8
console.log('Task8');
let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users3 = [ vasya2, petya2, masha2 ];
  let usersMapped = users3.map((el) => ({
  fullName: `${el.name} ${el.surname}`,
  id: el.id
  })); 
console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин
console.log('\n');

//Task9
console.log('Task9');
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };
let names4 = [ vasya, petya, masha ];
const sortByAge = (names4) => names4.sort((a, b) => a.age - b.age);
sortByAge(names4);
console.log(names4[0].name); // Вася
console.log(names4[1].name); // Маша
console.log(names4[2].name); // Петя
console.log('\n');

//Task9
console.log('Task9');
function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

for (let key in count) {
  console.log(`${key}: ${count[key]}`
)};
console.log('\n');

//Task10
console.log('Task10');
let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 29 };
let arr16 = [ vasya, petya, masha ];

const getAverageAge = (arr) => (arr.reduce((curr, el) => curr + el.age, 0) / arr.length).toFixed(0);
console.log( getAverageAge(arr16) ); // (25 + 30 + 29) / 3 = 28