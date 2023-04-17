"use strict";
console.log("Рекурсия и стэк:");
console.log('\n');
//Функция вызывает сама себя

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x; 
  }
  return result;
}
console.log(pow(2, 3)); //8

const powRec = (x, n) => (n == 1) ? x : powRec(x, n - 1) * x;
console.log(powRec(2, 3)); //8
console.log('\n');
//Контекст выполнения – специальная внутренняя структура данных, которая содержит информацию о вызове функции
//Создаётся новый контекст для вложенного вызова
//Контекст: { x: 2, n: 1, строка 1 } pow(2, 1)
//Контекст: { x: 2, n: 2, строка 5 } pow(2, 2)
//Контекст: { x: 2, n: 3, строка 5 } pow(2, 3)

//Рекурсивные обходы

let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, curr) => prev + curr.salary, 0);
  } else {
    let sum = 0;
    console.log(Object.values(department))
    for (let subArr of Object.values(department)) {
      sum += sumSalaries(subArr);
    }
    return sum;
  }
}
console.log(sumSalaries(company)); //670
console.log('\n');

//Связанный список
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let secondList = list.next.next;
console.log(secondList); //{value: 3, next: {…}}
list.next.next = null;
console.log(list); //{value: 1, next: {…}}
list.next.next = secondList;
// добавление нового элемента в начало списка
list = { value: "new item", next: list }; //{value: 'new item', next: {…}}
console.log(list);
//удаление элемента 1 из середины
list.next = list.next.next; //{value: 'new item', next: {…}}
console.log(list);

//Task1
function sumTo1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo1(100)); //5050

const sumTo2 = n => (n == 1) ? n : n + sumTo2(n - 1);
console.log(sumTo2(100)); //5050

const sumTo3 = n => (n * (n + 1))/ 2;
console.log(sumTo3(100)); //5050
console.log('\n');

//Task2
const factorial = n => (n == 1) ? n : n * factorial(n - 1);
console.log(factorial(5)); //120
console.log('\n');

//Task3
const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2)
console.log(fib(3)); // 2
console.log(fib(7)); // 13
//console.log(fib(77)); // 5527939700884757

function fib2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib2(3)); // 2
console.log(fib2(7)); // 13
console.log(fib2(77)); // 5527939700884757
console.log('\n');

//Task4 
let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let print = list;
  while(print) {
    console.log(print.value);
    print = print.next;
  }
}
printList(list);

function printList2(list) {
  console.log (list.value);
  if(list.next) {
    printList2(list.next)
  }
}
printList2(list);
console.log('\n');

function printList3(list) {
  if(list.next) {
    printList3(list.next)
  }
  console.log (list.value);
}
printList3(list)