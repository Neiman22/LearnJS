"use strict";
console.log("Массивы:");

//Упорядоченная коллекция данных
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { console.log('привет'); }, 3.14, ];
console.log(arr[1].name); //'Джон'
arr[3](); //'привет'

//Получение последнего значения
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
console.log('\n');

//Методы pop/push, shift/unshift
//pop - Удаляет последний элемент из массива и возвращает его
let fruits = ["Яблоко", "Апельсин", "Груша"];
console.log(fruits);
console.log(fruits.pop()); //Груша
console.log(fruits); //Элемент удаляется

//push - Добавляет элемент в конец массива
fruits.push("Груша");
console.log(fruits);

//shift - Удаляет из массива первый элемент и возвращает его
console.log(fruits.shift()); //Яблоко
console.log(fruits); //Элемент удаляется

//ushift - Добавляет элемент в начало массива
fruits.unshift('Яблоко');
console.log(fruits); //Элемент удаляется
console.log('\n');

//Перебор for...of только значений
for (let key of fruits) {
  console.log(key);
}
console.log('\n');

//toString возвращает список элементов, разделённых запятыми
let arr2 = [1, 2, 3];
console.log(arr2);
console.log(String(arr2));
console.log('\n');

//Если один из аргументов == является объектом (массивом), а другой – примитивом, то объект преобразуется в примитив
// после того, как [] был преобразован в ''
console.log(0 == []); //true, так как '' преобразуется в число 0
console.log('0' == [] ); //false, нет преобразования типов, разные строки
console.log('\n');

//Task
let newArr = ['Джаз', 'Блюз'];
console.log(newArr);
newArr.push('Рок-н-ролл');
console.log(newArr);
newArr[Math.floor((newArr.length - 1) / 2)] = 'Классика';
console.log(newArr);
newArr.shift();
console.log(newArr);
newArr.unshift('Рэп', 'Регги');
console.log(newArr);
console.log('\n');

let arr3 = ["a", "b"];
arr3.push(function(){
  console.log(this);
})
arr3[2](); //['a', 'b', ƒ];
console.log('\n');

let arr4 = [5, 12, 3, 7];
console.log(arr4);
function sumInput(arr) {
  let sum = 0
  for (let key of arr){
    sum += key;
  }
  return sum;
}
console.log(sumInput(arr4));
console.log('\n');

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let key of arr) {
    currentSum += key;
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
};
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
