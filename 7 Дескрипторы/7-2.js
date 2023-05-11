"use strict";
console.log("Геттеры и сеттеры");
//Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи

let obj = {
  name: 'Artem',
  secondName: 'Petrov',

  get propName() {
    return `${this.name} ${this.secondName}`
  },

  set propName(value) {
    [this.name, this.secondName] = value.split(' ');
  }
}
//Снаружи свойство-аксессор выглядит как обычное свойство
console.log(obj.propName); //Artem Petrov
obj.propName = 'Alice Cooper';
console.log(obj.propName); //Alice Cooper
console.log(obj.name); //Alice
console.log('\n');

//Дескрипторы свойств доступа
//Свойства-аксессоры не имеют value и writable, но взамен предлагают функции get и set
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`
  },

  set(value) {
    [this.name, this.surname] = value.split(' ');
  }
})
console.log(user.fullName); //John Smith
for (let key in user) console.log(key); //name, surname
console.log('\n');

//Умные геттеры/сеттеры
let user2 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log('Имя слишком короткое, должно быть более 4 символов');
      return
    }
    this._name = value;
  }
}
user2.name = "Pete";
console.log(user2.name); //Pete
user2.name = "Pet"; //Имя слишком короткое, должно быть более 4 символов
console.log('\n');

//Использование для совместимости
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear(); 
    }
  })
}
let john = new User ("John", new Date(1985, 3, 16));
console.log(john.birthday); //Tue Apr 16 1985
console.log(john.age); //38