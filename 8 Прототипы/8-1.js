"use strict";
console.log("Прототипное наследование");
//[[Prototype]] либо равно null, либо ссылается на другой объект

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk")
  }
};

let rabbit = {
  jump: true,
};

console.log(rabbit.eats); //undefined
rabbit.__proto__ = animal;
console.log(rabbit.jump); //true
console.log(rabbit.eats); //true
rabbit.walk(); //Animal walk

let longPr = {
  earLength: 10,
  __proto__: rabbit
}

longPr.walk();//Animal walk
console.log(longPr.jump); //true
//Ссылки не могут идти по кругу
//Значение __proto__ может быть объектом или null
console.log('\n');

//Операция записи не использует прототип
//Свойства-аксессоры – исключение
longPr.walk = function() {
  console.log("Hello new method");
}
longPr.walk(); //Hello new method

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

// срабатывает сеттер!
console.log(admin.fullName); //John Smith
admin.fullName = "Artem Pushkarev";
console.log(admin.surname); //Pushkarev
console.log('\n');

//Прототипы никак не влияют на this
let animal2 = {
  walk() {
    if(!this.isSlepping) {
      console.log("I walk");
    }
  },
  sleep() {
    this.isSlepping = true;
  }
}
let rabbit2 = {
  __proto__: animal2,
  name: "White Rabbit"
}
rabbit2.sleep(); //изменяет isSlepping у rabbit2
console.log(rabbit2.isSlepping); //true
animal2.walk(); //I walk
console.log('\n');

//Цикл for…in проходит не только по собственным, но и по унаследованным свойствам объекта
let animal3 = {
  eats: true
};

let rabbit3 = {
  jumps: true,
  legs: true,
  __proto__: animal3
};

console.log(Object.keys(rabbit3)); //['jumps', 'legs'];
for (let prop in rabbit3) {
  console.log(prop); //jumps, legs, eats
}

for (let prop in rabbit3) {
  rabbit3.hasOwnProperty(prop) ? console.log(`Our: ${prop}`) : console.log(`Inherited: ${prop}`);
} //Our: jumps, Our: legs, Inherited: eats
console.log('\n');

//Task1
console.log('Task1:');
let animal4 = {
  jumps: null
};
let rabbit4 = {
  __proto__: animal4,
  jumps: true
};

console.log(rabbit4.jumps); //true
delete rabbit4.jumps;
console.log(rabbit4.jumps); //null
delete animal4.jumps;
console.log(rabbit4.jumps); //undefined
console.log('\n');

//Task2
console.log('Task2:');
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
console.log(pockets.pen); //3
console.log(bed.glasses); //1
