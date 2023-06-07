"use strict";
console.log(`Async await`);
//async всегда возвращает промис

async function f() {
  return 1;
  //return Promise.resolve(1); //аналогичная запись
}
f().then((res) => {
  console.log(res);
  console.log('\n')
}); //1

//await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится
//await нельзя использовать на верхнем уровне вложенности (вне тела функции)
async function f2(){
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve('Готово'), 1000);
  })
  let result = await promise;
  console.log(result); //'Готово' через 1 сек
  console.log('\n');
}
f2();

//Пример
async function showAvatar() {
  try {
  // запрашиваем JSON с данными пользователя
  let response = await fetch ('/article/promise-chaining/user.json');
  let user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((res) => setTimeout(res, 3000));
  img.remove();

  return githubUser;
  } catch (err) {
    console.log(err); 
    console.log('\n');
  }
}
showAvatar(); //SyntaxError: Unexpected token


//Обработка ошибок
async function f3() {
  try {
    let response = await fetch('http://no-such-url');
  } catch (err) {
    console.log(err);
    console.log('\n'); 
  }
}
f3(); //TypeError: Failed to fetch

//Если нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис
async function f4() {
  let response = await fetch('http://no-such-url');
}
f4().catch((err) => {
  console.log(err);
  console.log('\n');
});//Uncaught (in promise) TypeError: Failed to fetch

//Task1
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}
loadJson('no-such-user.json').catch((err) => {
  console.log('Task1');
  console.log(err);
  console.log('\n');
});//Error: 404

//Task2
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }    
}

async function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");
  let user;

  try {
    user = await loadJson(`https://api.github.com/users/${name}`);

  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
    } else {
      throw err;
    }
  }
  console.log('Task2');
  console.log(`Полное имя: ${user.name}.`);
  console.log('\n');
  return user
}
demoGithubUser();

//Task3
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f5(){
  wait().then(res => {
    console.log('Task3');
    console.log(res);
    console.log('\n');
  })
};
f5();
