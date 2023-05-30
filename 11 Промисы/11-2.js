"use strict";
console.log(`Промисы`);
//это специальный объект в JavaScript, который связывает «создающий» и «потребляющий» коды вместе

let promise = new Promise (function(resolve, reject) {
  // функция-исполнитель (executor)
  // setTimeout(() => resolve('done'), 1000); //state: "fulfilled", result: "done"
    setTimeout(() => reject(new Error("Whoops!")), 1000); //state: "rejected", result: error
})
//resolve(value) — если работа завершилась успешно, с результатом value
//reject(error) — если произошла ошибка, error – объект ошибки
//учитывается только первый вызов reject/resolve
console.log(promise);
console.log('\n');

//Потребители: then, catch
//Функции-потребители могут быть зарегистрированы (подписаны) с помощью методов .then и .catch
promise
  .then(console.log) // выведет "done!" через одну секунду
  .catch(err => {
    console.log(err);
    console.log('\n');
  }); // выведет "Error: Whoops!" спустя одну секунду

//Очистка: finally
//выполнится в любом случае, когда промис завершится: успешно или с ошибкой
new Promise((resolve, reject) => {
  setTimeout(() => resolve('value'), 2000)
})
  .finally(() => console.log("Промис завершён")) //Промис завершён
  .then(result => {
    console.log(result);
    console.log('\n');
  }); //value

//Пример: loadScript
function loadScript (src) {
  return new Promise (function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  })
}
let promise2 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise2
  .then(
    script => console.log(`${script.src} загружен!`),
    error => console.log(`Ошибка: ${error.message}`),
  )

promise2.then(script => {
  console.log('Ещё один обработчик...');
  console.log('\n');
});

//Task1
console.log('Task1');
function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log('выполнилось через 3 секунды'));
console.log('\n');


//Task2
console.log('Task2');
console.log('\n');