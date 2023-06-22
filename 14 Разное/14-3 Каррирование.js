'use strict'
console.log('Каррирование');

function curry(f) {
  return function(a) {
    return function(b) {
      return function(c) {
        return f(a, b, c);
      }
    }
  }
}
function sum (a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);
console.log(curriedSum(5)(6)(3)); //14

//Пример
function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
let curriedLog = curry(log);
curriedLog(new Date())("DEBUG")("some debug"); //[9:10] [DEBUG] some debug

//Пример2
function newcurry (f) {
  return function(a) {
    return function(b, c) {
      return f(a, b, c);
    }
  }
}
log = newcurry(log);
let logNow = log(new Date());
logNow("INFO", "message"); //[9:17] [INFO] message

//Продвинутая реализация каррирования
function topcurry (func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2){
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}
/*
1. Вызвать сейчас: если количество переданных аргументов args совпадает с количеством аргументов при объявлении функции (func.length) или больше, тогда вызов просто переходит к ней.
2.
*/
