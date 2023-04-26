"use strict";
console.log("Call/Aplly:");
//Кэширование функции
function slow(x) {
  const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);
  return fib(x);
}

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) { // если кеш содержит такой x
      return cache.get(x); // читаем из него результат
    } else {
      let result = func(x); // иначе, вызываем функцию
      cache.set(x, result); // запоминаем результат
      return result;
    }
  }
}

slow = cachingDecorator(slow);
console.log(slow(30));
console.log("Again: " + slow(30));
console.log(slow(31));
console.log("Again: " + slow(31));
console.log('\n');

//func.call(context, …args)позволяет вызывать функцию, явно устанавливая this
//Он запускает функцию func, используя первый аргумент как её контекст this, а последующие – как её аргументы
//func(1, 2, 3) == func.call(obj, 1, 2, 3) (func.call ещё и устанавливает this равным obj)
function sayHi(phase) {
  console.log(phase + ' ' + this.name);
}
let user = {name: 'Artem'};
let admin = {name: 'Admin'};
sayHi.call(user, 'Hello'); //Hello Artem
sayHi.call(admin, 'Hi'); //Hi Admin
console.log('\n');

//Кэширование методов объекта
let worker = {
  someMethod() {
    return 1
  },

  slow(x) {
    const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);
    return fib(x) * this.someMethod();
  }
}
function cachingDecorator2(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) { // если кеш содержит такой x
      return cache.get(x); // читаем из него результат
    } else {
      let result = func.call(this, x); // иначе, вызываем функцию
      cache.set(x, result); // запоминаем результат
      return result;
    }
  }
}
worker.slow = cachingDecorator2(worker.slow);
console.log(worker.slow(40));
console.log('Again: ' + worker.slow(40));
console.log('\n');

//Несколько аргументов
let worker2 = {
  slow(min, max) {
    const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);
    return fib(min) + fib(max);
  }
}
function cachingDecorator3(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments);
    if (cache.has(key)) { // если кеш содержит такой x
      return cache.get(key); // читаем из него результат
    } else {
      let result = func.call(this, ...arguments); // иначе, вызываем функцию
      cache.set(key, result); // запоминаем результат
      return result;
    }
  }
}
function hash() {
  return [].join.call(arguments);
}
worker2.slow = cachingDecorator3(worker2.slow, hash);
console.log(worker2.slow(30, 31));
console.log('\n');

//func.apply(context, args)
//принимая в качестве списка аргументов псевдомассив args
//Разница в синтаксисе между call и apply состоит в том, что call ожидает список аргументов, в то время как apply принимает псевдомассив

//Task1
console.log('Task1');
function work(a, b) {
  console.log( a + b );
}
function spy(func) {
  wrapper.calls = [];
  function wrapper(...args){
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  return wrapper
}
work = spy(work);
work(1, 2); //3
work(4, 5); //9
for (let args of work.calls) {
  console.log('call: ' + args.join())
}
console.log('\n');

//Task2
console.log('Task2');
function f(x) {
  console.log(x);
}
function delay(func, ms){
  return function() {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс