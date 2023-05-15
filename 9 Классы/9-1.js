"use strict";
console.log("Класс: базовый синтаксис");
//Класс – это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения (свойства) и реализацию поведения (методы)

class User {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
  //Методы в классе не разделяются запятой
}

let user = new User('Artem');
user.sayHi(); //Artem
console.log(typeof User); //function
//Создаёт функцию с именем User, которая становится результатом объявления класса. Код функции берётся из метода constructor (она будет пустой, если такого метода нет)
//Сохраняет все методы, такие как sayHi, в User.prototype
console.log(User === User.prototype.constructor); //true
console.log(User.prototype.sayHi); //sayHi() { console.log(this.name); }
console.log(Object.getOwnPropertyNames(User.prototype)); //['constructor', 'sayHi']
console.log('\n');

//Синтаксический аналог функции
function User2(name) {
  this.name = name;
}
User2.prototype.sayHi = function() {
  console.log(this.name);
}
let user2 = new User2("Антон");
user2.sayHi(); //Антон
//Конструктор класса не может быть вызван без new
//Методы класса являются неперечислимыми
//Классы всегда используют use strict
console.log('\n');

//Class Expression
let User3 = class {
  sayHi() { console.log('Привет'); }
}

//Геттеры/сеттеры
class User4 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Имя короткое");
      return;
    }
    this._name = value;
  }
}

let user4 = new User4("Ivan");
console.log(user4.name); //Ivan
user4 = new User4('Iv');//Имя короткое
console.log('\n');

//Свойства классов
class User5 {
  name = "Anonim";
  sayHi() {
    console.log(`Hello ${this.name}`);
  }
}
new User5().sayHi(); //Hello Anonim
console.log('\n');

//Task1
console.log('Task1');

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10)
        hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10)
        mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10)
        secs = '0' + secs;

      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }

    stop() {
      clearInterval(this.timer);
    };

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();





