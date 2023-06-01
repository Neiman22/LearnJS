"use strict";
console.log(`Обработка ошибок`);
console.log('\n');

fetch('https://no-such-server.blabla')
  .then (res => res.json())
  .catch (err => {
    console.log(err);
    console.log('\n');
  });

  fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => {
    console.log(error.message);
    console.log('\n');
  });
  
//Неявный try…catch
//"Невидимый try..catch" вокруг промиса автоматически перехватывает ошибку и превращает её в отклонённый промис
new Promise((resolve, reject) => {
  reject(new Error("Ошибка!"));
}).catch((err) => {
  console.log(err);
  console.log('\n')
}); // Error: Ошибка!
//Финальный .catch перехватывает как промисы, в которых вызван reject, так и случайные ошибки в обработчиках

//Пробрасывание ошибок
new Promise(() => {
  throw new Error("Ошибка!");
}).catch(() => console.log("Ошибка обработана, продолжить работу"))
  .then(() => {
    console.log("Управление перейдёт в следующий then");
    console.log('\n');
  });

//Task1
/*
  new Promise(function(resolve, reject) {
    reject(setTimeout(() => {
      throw new Error("Whoops ошибочка!");
    }, 1000));
  }).catch(console.log);
*/

//
function renameFiles (arr) {
  let subArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (subArr.includes(arr[i])) {
        arr[i] += `(1)`;
        subArr.push(arr[i]);
    } else {
      subArr.push(arr[i]);
    }
  }
  return subArr;
}
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
console.log('\n');
//["file", "file(1)", "image", "file(1)(1)", "file(2)"]
