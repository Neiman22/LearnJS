"use strict";
console.log(`Пользовательские ошибки`);

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function test() {
  throw new ValidationError('Упс');
}

function readUser(json) {
  let user = JSON.parse(json);
  if (!user.name) throw new ValidationError("Нет поля: name");
  if (!user.age) throw new ValidationError("Нет поля: age");
  return user;
}

try {
  test();
} catch (error) {
  console.log(error.message);  //Упс!
  console.log(error.name); //ValidationError
  console.log(error.stack); //список вложенных вызовов с номерами строк для каждого
  console.log('\n');
}

//Расширение
try {
  let user =  readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
  } else if (err instanceof SyntaxError) {
    console.log("JSON Ошибка Синтаксиса: " + err.message);
  } else {
    throw err;
  }
  console.log('\n');
}

//Наследование
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("Нет свойства: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

function readUser2(json) {
  let user = JSON.parse(json);
  if (!user.name) throw new PropertyRequiredError("name");
  if (!user.age) throw new PropertyRequiredError("age");
  return user;
}

try {
  let user = readUser2('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Неверные данные: " + err.message); //Неверные данные: Нет свойства: name
    console.log(err.name); //PropertyRequiredError
    console.log(err.property); //name
  } else if (err instanceof SyntaxError) {
    console.log("Ошибка синтаксиса JSON: " + err.message);
  } else {
    throw err;
  }
}
console.log('\n');

//Task1
console.log('Task1');

class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = 'FormatError'
  }
}
let err = new FormatError("ошибка форматирования");

console.log(err.message); //ошибка форматирования
console.log(err.name); //FormatError
console.log(err.stack); //stack

console.log( err instanceof FormatError );
console.log( err instanceof SyntaxError );

//Task1
console.log('Task2');
function getCommonCharacterCount(str1, str2) {
  let count = 0;
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for (let i = 0; i < arr1.length; i++ ) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
        arr1.splice(i, 1);
        i--;
        arr2.splice(j, 1);
      }
    }
  }
  return count;
};

console.log(getCommonCharacterCount('aabcc', 'adcaa'));
console.log(getCommonCharacterCount('abca', 'xyzbac'));