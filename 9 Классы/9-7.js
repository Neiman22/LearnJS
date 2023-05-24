"use strict";
console.log(`Примеси`);
// примесь определяет методы, которые реализуют определённое поведение

let sayHiMixin = {
  sayHi() {
    console.log(`Hello, ${this.name}`);
  },
  sayBye() {
    console.log(`Good bye, ${this.name}`);
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(User.prototype, sayHiMixin);
new User ('Artem').sayBye(); //Good bye, Artem
console.log('\n');

//Примеси могут наследовать друг друга
let sayMixin = {
  say(phase) {
    console.log(phase);
  }
}

let sayHelloMixin = {
  __proto__: sayMixin,

  sayHi() {
    super.say(`Hello, ${this.name}`);
  },

  sayBye() {
    super.say(`Bye, ${this.name}`)
  }
}

class User2 {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User2.prototype,sayHelloMixin);
new User2('Anton').sayBye(); //Bye, Anton