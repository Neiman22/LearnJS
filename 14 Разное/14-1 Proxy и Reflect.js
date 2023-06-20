'use strict';
console.log('Proxy и Reflect');
//Proxy «оборачивается» вокруг другого объекта и может перехватывать разные действия с ним

//handler – конфигурация прокси: объект с «ловушками» («traps»): методами
//С пустым handler он просто перенаправляет все операции на target
let target = {};
let proxy = new Proxy (target, {}); //пустой handler
proxy.test = 5;
console.log(target.test); //5 свойство появилось в target!
console.log(proxy.test); //5
for (let key in proxy) console.log(key); //test
console.log('\n');

let numbers = [0, 1, 2];
numbers = new Proxy (numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  }
})
console.log(numbers[1]); //1
console.log(numbers[5]); //0

let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
}
dictionary = new Proxy (dictionary, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return prop;
    }
  }
});
console.log(dictionary['Hello']) //Hola
console.log(dictionary['Welcome']); //Welcome
console.log('\n');

//Ловушка «set»
//цикл for..in по объекту, равно как Object.keys и Object.values пропускали свойства, начинающиеся с подчёркивания _
let user = {
  name: "Вася",
  age: 30,
  _password: "***"
};
user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
})
for (let key in user) console.log(key); //name, затем: age
console.log(Object.keys(user)); //['name', 'age']
console.log(Object.values(user)); //['Вася', 30]
console.log('\n');

//Reflect – встроенный объект, упрощающий создание прокси
//Для каждого внутреннего метода, перехватываемого Proxy, есть соответствующий метод в Reflect, 
//который имеет такое же имя и те же аргументы, что и у ловушки Proxy
let user2 = {};
Reflect.set(user2, 'name', 'Artem');
console.log(user2.name); //Artem

let user3 = {
  name: 'Anton'
}
user = new Proxy(user3, {
  get(target, prop, receiver){
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver); //Reflect.get читает свойство объекта.
  },
  set(target, prop, val, receiver){
    console.log(`SET ${prop} = ${val}`);
    return Reflect.get(target, prop, val, receiver); //Reflect.set записывает свойство и возвращает true при успехе, иначе false
  },
})
let name = user.name; //GET name
user.name = 'Artem'; //SET name = Artem

