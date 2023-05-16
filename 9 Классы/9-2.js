"use strict";
console.log("Наследование классов");

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop(){
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
  }
}
let animal = new Animal('Собакен')
animal.run(10); //Собакен бежит со скоростью 10.
animal.stop(); //Собакен стоит неподвижно.

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}
let rabbit = new Rabbit('Кролик');
rabbit.run(15); //Кролик бежит со скоростью 15.
rabbit.hide(); //Кролик прячется!
console.log('\n');

//Переопределение методов
class Tiger extends Animal {
  hide() {
    console.log(`${this.name} прячется!`)
  }
  stop() {
    super.stop();
    this.hide();
  }
}
let tiger = new Tiger("Тигр");
tiger.run(20); //Тигр бежит со скоростью 20.
tiger.stop(); //Тигр стоит неподвижно. Тигр прячется!
console.log('\n');

//Переопределение конструктора
//Конструкторы в наследуемых классах должны обязательно вызывать super(...), и (!) делать это перед использованием this..
//Родительский конструктор всегда использует своё собственное значение поля, а не переопределённое.
class Bear extends Animal {
  constructor (name, length) {
    super(name);
    this.length = length;
  }
}
let bear = new Bear("Белый медвдь", 3.2);
console.log(bear.name); //Белый медвдь
console.log(bear.length); //3.2
console.log('\n');

//Task1
console.log('Task1');
class Animal2 {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit2 extends Animal2 {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit2 = new Rabbit2("Белый кролик");
console.log(rabbit2.name); //Белый кролик

//Task2
console.log('Task2');
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({
  template: 'h:m:s'
});


class ExtendedClock extends Clock {
  constructor(value) {
    super(value);
    let { precision = 1000 } = value;
    this.precision = precision
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
let extendsClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 2000
});
extendsClock.start();