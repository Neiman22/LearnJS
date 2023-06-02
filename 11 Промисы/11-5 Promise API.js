"use strict";
console.log(`Promise API`);
console.log('\n');

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 2000)),
]).then(console.log); //[1, 2, 3]
//Даже если первый промис будет выполняться дольше всех, его результат всё равно будет первым в массиве

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];
let requests = urls.map(elem => fetch(elem));
Promise.all(requests)
  .then(responses => responses.forEach(
    elem => console.log(`${elem.url}: ${elem.status}`)
  ));
//Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой

//Promise.allSettled
let urls2 = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls2.map(elem => fetch(elem)))
  .then(results => {
    console.log(results);
    results.forEach((result, num) => {
      if (result.status === "fulfilled") {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status === "rejected") {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    })
  })

//Promise.race ждёт только первый выполненный промис
//Promise.any ждёт только первый успешно выполненный промис