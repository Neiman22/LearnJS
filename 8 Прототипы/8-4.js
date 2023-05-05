"use strict";
console.log("Методы прототипов");
//Object.create(proto, [descriptors])
let animal = {
  eats: true,
}

let rabbit = Object.create(animal);
console.log(rabbit.eats); //true
console.log(Object.getPrototypeOf(rabbit) === animal); //получаем прототип объекта
Object.setPrototypeOf(rabbit, { ears: true }); //заменяем прототип объекта
console.log(rabbit.eats); //undefined
console.log(rabbit.ears); //true
console.log('\n');

//Дескрипторы свойств
let rabbit2 = Object.create(animal, {
  ears: {
    value: 2,
  }
});
console.log(rabbit2.ears); //2

//«Продвинутое» клонирование объекта
let clone = Object.create(Object.getPrototypeOf(rabbit2), Object.getOwnPropertyDescriptors(rabbit2));
console.log('\n');

let obj = {};
let obj2 = Object.create(null);
let key = "__proto__";
obj[key] = "some value";
obj2[key] = "some value";
console.log(obj[key]); //[object Object]
console.log(obj2[key]); //some value
console.log('\n');

//Task1
console.log("Task1");
let dictionary = Object.create(null, {
  toString: { // определяем свойство toString
    value() { // значение -- это функция
      return Object.keys(this).join();
    }
  }
});


dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
for (let key in dictionary) {
  console.log(key);
}
console.log(dictionary.toString())
console.log('\n');

//Task2
console.log("Task2");
function Rabbit(name) {
  this.name = name;
};
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};
let rabbit3 = new Rabbit("White");

rabbit3.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit3).sayHi();
rabbit3.__proto__.sayHi();




