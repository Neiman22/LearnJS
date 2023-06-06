"use strict";
console.log(`Микрозадачи`);
console.log('\n');
//Обработчики промисов .then/.catch/.finally всегда асинхронны
//когда промис выполнен, его обработчики .then/catch/finally попадают в очередь микрозадач (microtask queue)

let promise = Promise.resolve();
promise.then(() => {
  console.log('Промис выполнен');
  console.log('\n');
});
console.log('Код выполнился быстрее');


//Необработанные ошибки
//unhandledrejection возникает, когда очередь микрозадач завершена: движок проверяет все промисы и, если какой-либо из них в состоянии «rejected», то генерируется это событие
let promise2 = Promise.reject(new Error('Ошибка в промисе'));
//promise2.catch(() => console.log('Ошибка поймана'));
setTimeout(() => promise2.catch(() => console.log('Ошибка поймана')), 1000);
window.addEventListener('unhandledrejection', event => {
  console.log(event.reason); //Error: Ошибка в промисе
});