"use strict";
console.log("F.prototype");
//F.prototype означает обычное свойство с именем "prototype" для F

let animal = {
  eats: true,
}

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal; //"При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]"
let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.__proto__); //{eats: true}
console.log(rabbit.eats); //true
console.log(rabbit.name); //White Rabbit
console.log('\n');

//F.prototype по умолчанию, свойство constructor
function Rabbit2(name) {
  this.name = name;
  console.log(name);
}
console.log(Rabbit2.prototype.constructor == Rabbit2); //true
let rabbit2 = new Rabbit2("White Rabbit");
console.log(rabbit2.constructor == Rabbit2); //true
let rabbit3 = new Rabbit2("Black Rabit");
console.log('\n');

//Task1
console.log('Task1');
function Gabbit() {}
Gabbit.prototype = {
  eats: true,
}
let gabbit = new Gabbit();
//Gabbit.prototype = {}; //true
//Gabbit.prototype.eats = false; //false
//delete gabbit.eats; //true
//delete Gabbit.prototype.eats; //undefined
console.log(gabbit.eats);
console.log('\n');

//Task2
console.log('Task2');
function User(name){
  this.name = name;
}
//User.prototype = {}; //undefined
//User.prototype = {}; //undefined
let user = new User ('John');
let user2 = new user.constructor('Artem');
console.log(user2.name); //Artem