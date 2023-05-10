"use strict";
console.log("Дескрипторы свойств");
//Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
  name: 'Artem',
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor); //{value: 'Artem', writable: true, enumerable: true, configurable: true}

Object.defineProperty(user, 'secondName', {value: 'Pushkarev'});
console.log(user); //{name: 'Artem', secondName: 'Pushkarev'}
let descriptor2 = Object.getOwnPropertyDescriptor(user, 'secondName');
console.log(descriptor2); //{value: 'Pushkarev', writable: false, enumerable: false, configurable: false}

Object.defineProperty(user, 'name', {writable: false});
//user.name = 'Pete'; Uncaught TypeError: Cannot assign to read only property 'name' of object
console.log('\n');

//Неперечислимое свойство
let user2 = {
  name: 'Anton',
  toString() {
    return this.name;
  }
}
for (let key in user2) console.log(key); // name, toString
console.log(Object.keys(user2)); //['name', 'toString']

Object.defineProperty(user2, "toString", {enumerable: false});
for (let key in user2) console.log(key); // name
console.log(Object.keys(user2)); //['name']

//configurable:false
//Неконфигурируемое свойство не может быть удалено, его атрибуты не могут быть изменены

//Object.getOwnPropertyDescriptors
//Клонирование объекта вместе с флагами
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user2));


