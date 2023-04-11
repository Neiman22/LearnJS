"use strict";
console.log("Перебираемые объекты:");

//Symbol.iterator
/*
Когда цикл for..of запускается, он вызывает этот метод один раз (или выдаёт ошибку, если метод не найден). 
Этот метод должен вернуть итератор – объект с методом next.
Дальше for..of работает только с этим возвращённым объектом.
Когда for..of хочет получить следующее значение, он вызывает метод next() этого объекта.
Результат вызова next() должен иметь вид {done: Boolean, value: any}, 
где done=true означает, что цикл завершён, в противном случае value содержит очередное значение.
*/
let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        }
      } else {
        return {
          done: true,
        }
      }
    }
  }
}

for (let num of range) {
  console.log(num);
}
console.log('\n');

//Перебор строки
let str = 'Artem';
let iterator = str[Symbol.iterator]();

while(true){
  let result = iterator.next();
  if (result.done) break;
  console.log (result.value);
}
console.log('\n');

/*
Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator, как было описано выше.
Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.
*/

//Array.from
//принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let newArr = Array.from(arrayLike);
let newArr2 = Array.from(range, num => num * num);
console.log(newArr.pop()); //Hello
console.log(newArr2); //[1, 4, 9, 16, 25]