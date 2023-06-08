'use strict'
console.log('Генераторы');

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let gen = generateSequence();
let one = gen.next();
console.log(one); //{value: 1, done: false}
let two = gen.next();
console.log(two); //{value: 2, done: false}
let three = gen.next();
console.log(three); //{value: 3, done: true}

let gen2 = generateSequence();
for (let value of gen2) {
  console.log(value); //1, 2
}

let gen3 = generateSequence();
let sec = [0, ...gen3];
console.log(sec); //[0, 1, 2]
console.log('\n');

//Использование генераторов для перебираемых объектов
let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
console.log([...range]); //[1, 2, 3, 4, 5]
console.log('\n');

//Композиция генераторов
function* genSec (start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* genPassword () {
  yield* genSec(48, 57);
  yield* genSec(65, 90);
  yield* genSec(97, 122);
}

let str = '';
for(let code of genPassword()) {
  str += String.fromCharCode(code);
}
console.log(str); //0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
console.log('\n');

//yield может передавать значение извне в генератор
function* gen4() {
  // Передаём вопрос во внешний код и ожидаем ответа
  let result = yield "2 + 2 = ?";
  console.log(result);
  let result2 = yield "3 + 3 = ?";
  console.log(result2);
}
let generator = gen4();
console.log(generator.next().value); // 2 + 2 = ?
console.log(generator.next(4).value); // 4, 3 + 3 = ?
console.log(generator.next(9).done); // 9, true

