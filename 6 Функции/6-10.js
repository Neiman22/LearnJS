"use strict";
console.log("Привязка контекста к функции:");
let user = {
  firstName: "Artem",
  sayHi() {
    console.log(`Hello ${this.firstName}!`);
  }
}
//user.sayHi(); //Hello Artem!
//setTimeout(user.sayHi, 2000); //Hello undefined!

//Замыкание
//setTimeout(() => user.sayHi(), 3000); //Hello Artem!

//Привязка контекста методом bind
let user2 = {
  firstName: "Anton",
}
function func(phase) {
  console.log(phase + ' ' + this.firstName + '!');
}
let funcUser = func.bind(user2);
funcUser("Hi"); //Hi Anton!

//Bind с методом объекта
let sayHi = user.sayHi.bind(user);
sayHi(); //Hello Artem!
setTimeout(sayHi, 4000); //Hello Artem!

//Частичное приминение
function mul (a, b) {
  return a * b;
}
let triple = mul.bind(null, 3);
console.log(triple(3)); //9

//Частичное применение без контекста
let user3 = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

function wrapper(func, ...argsWrap) { //функция обертка
  return function(...args) {
    return func.call(this, ...argsWrap, ...args)
  }
}

user3.saiNow = wrapper(user3.say, new Date().getHours() + ':' + new Date().getMinutes());
user3.saiNow("Hello"); //[9:25] John: Hello!
console.log('\n');

//Task1
console.log('Task1');
function f(){
  console.log( this );
}
let user4 = {
  g: f.bind(null)
}
user4.g(); //null
console.log('\n');

//Task2
console.log('Task2');
function f2() {
  console.log(this.name);
}
f2 = f2.bind({ name: "John" }).bind({ name: "Smith" });
f2(); //John
console.log('\n');

//Task3
console.log('Task3');
function sayHello() {
  console.log(this.name);
}
sayHello.test = 5;
let bound = sayHello.bind({ name: "Smith" });

console.log(bound.test); //undefined
//Результатом работы bind является другой объект. У него уже нет свойства test
console.log('\n');

//Task4
console.log('Task4');
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user5 = {
  name: "Sergey",

  loginOk () {
    console.log(`${this.name} logged in`);
  },

  loginFail () {
    console.log(`${this.name} failed to log in`);
  },
}
askPassword(user5.loginOk.bind(user5), user5.loginFail.bind(user5));
console.log('\n');

//Task5
console.log('Task5');
let user6 = {
  name: "John",
  login(result) {
    console.log( this.name + (result ? ' loggen in' : ' failed to log in'));
  }
}
askPassword(() => user6.login(true), () => user6.login(false));
askPassword(user6.login.bind(user6, true), user6.login.bind(user6, false));
console.log('\n');