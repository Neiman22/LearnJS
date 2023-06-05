"use strict";
console.log(`Промисификация`);
console.log('\n');
//Функция, которая принимает колбэк и меняет её, чтобы она вместо этого возвращала промис

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

  document.head.append(script);
}

let loadScriptPromise = (src) => {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject (err)
      else resolve(script);
    });
  })
}
//loadScriptPromise('script.js').then(console.log);

//promisify(f)
function promisify(f) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result)  {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
      args.push(callback); // добавляем колбэк в конец аргументов f
      f.call(this, ...args); // вызываем оригинальную функцию
    })
  }
}