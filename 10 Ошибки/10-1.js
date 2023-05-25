"use strict";
console.log(`Обработка ошибок, "try..catch"`);

try {
  console.log('Start block');
  lalala;
  console.log('Finish block never used');
} catch (err) {
  console.log('Catch block');
}
console.log('\n');

//Чтобы поймать исключение внутри запланированной функции, try..catch должен находиться внутри самой этой функции:
setTimeout (function () {
  try {
    lalala;
  }
  catch (err) {
    console.log('Catch block');
    console.log(err.name); //ReferenceError
    console.log(err.message); //lalala is not defined
    console.log(err.stack); //at 10-1.js:16:5
    console.log('\n');
  }
}, 1000);

//Использование
let json = "{ некорректный JSON }";
try {
  let user = JSON.parse(json);
  console.log(user.name); //не сработает
} catch (error) {
  console.log(error.name); //SyntaxError
}
console.log('\n');

//Генерация собственных ошибок
function readData() {
let json2 = '{ "name": "Artem", "age": 30 }';
try {
  let user = JSON.parse(json2);
  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени");
  }
  blabla(); //ошибка
  console.log(user.name); //не сработает
} catch(e) {
  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // проброс (*)
  }
  console.log('\n');
}
}

//Проброс исключения
try {
  readData();
} catch (err) {
  console.log("Внешний catch поймал: " + err ); //Внешний catch поймал: ReferenceError: blabla is not defined
  console.log('\n');
}

//try…catch…finally
//finally выполняется в любом случае
//Переменные внутри try..catch..finally локальны
try {
  console.log('try');
  if (confirm('Сгенерировать ошибку?')) BAD_CODE();
} catch (error) {
  console.log(error);
} finally {
  console.log('finally');
  console.log('\n');
}
