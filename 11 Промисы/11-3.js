"use strict";
console.log(`Цепочка промисов`);
console.log('\n');

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function (result) {
  console.log(result); // 1
  return result * 2;
}).then(function (result){
  console.log(result); // 2
  return result * 2;
}).then(function (result){
  console.log(result); // 4
  console.log('\n');
  return result * 2;
});

//Возвращаем промисы
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function (result) {
  console.log(result); // 1
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(result * 2), 1000);
  })
}).then(function (result){
  console.log(result); // 2
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(result * 2), 1000);
  })
}).then(function (result){
  console.log(result); // 4
  console.log('\n');
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(result * 2), 1000);
  })
});

//Более сложный пример: fetch
/*
fetch('/article/promise-chaining/user.json')
  .then(response => response.text())
  .then(text => {
    console.log(text); // {"name": "iliakan", isAdmin: true}
    console.log('\n');
  });
*/