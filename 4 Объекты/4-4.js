'use strict'
//Методы объектов
//Функцию, которая является свойством объекта, называют методом этого объекта
let user = {
    name: "Artem",
    age: 35,
    sayHi () { //сокращенный синтаксис
        console.log('Hello') //Hello
    }
}
user.sayHi();
console.log('\n');

//Ключевое слово this
//Значение this – это объект «перед точкой», который используется для вызова метода
let user2 = {
    name: "Artem",
    age: 35,
    sayHi () { //сокращенный синтаксис
        console.log(`Hello ${this.name}`) 
    },
    sayHi2 () { //сокращенный синтаксис
        console.log(`Hello ${user2.name}`) 
    }
}
user2.sayHi(); //Hello Artem
user2.sayHi2(); //Hello Artem
let admin = user2;
user2 = null;
admin.sayHi(); //Hello Artem
//admin.sayHi2(); //Error!!!
console.log('\n');

//«this» не является фиксированным
//если вызывается obj.f(), то this – это obj
let user3 = { name: "John" };
let admin3 = { name: "Admin" };

function sayHi () {
    console.log(this.name);
}

user3.func = sayHi;
admin3.func = sayHi;

user3.func(); //"John"
admin3.func(); //"Admin"
console.log('\n');

//У стрелочных функций нет «this»

//Task
function makeUser() {
    return {
      name: "John",
      ref: this,
    };
  }
  
let user4 = makeUser();
//console.log(user4.ref.name); //Error

let calculator = {
    read() {
        this.a = prompt('Enter a:');
        this.b = prompt('Enter b');
    },

    sum() {
        return +this.a + +this.b
    },

    mul() {
        return this.a * this.b
    }
};
  
//calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
console.log('\n');

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this
    }
};
ladder.up().up().down().showStep().down().showStep();