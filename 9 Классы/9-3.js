"use strict";
console.log("Статические свойства и методы");

class User {
  static staticMethod() {
    console.log(this === User);
  }
}
User.staticMethod(); //true

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date; 
  }

  static createTodays() {
    return new this("Сегодняшний дайджест", new Date);
  }
}

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
]
articles.sort(Article.compare);
console.log(articles[0].title); //CSS
let article = Article.createTodays();
console.log(article.title); //Сегодняшний дайджест
console.log('\n');

//Статические свойства
class Article2 {
  static publisher = "Иван Петров";
}
console.log(Article2.publisher);
console.log('\n');

//Наследование статических свойств и методов
class Animal {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`)
  }
}
let rabbits = [
  new Rabbit("Белый кролик", 10),
  new Rabbit("Чёрный кролик", 5)
];
rabbits.sort(Rabbit.compare);
rabbits[0].run(); //Чёрный кролик бежит со скоростью 5

console.log(Rabbit.__proto__ === Animal); //true
console.log(Rabbit.prototype.__proto__ === Animal.prototype); //true
console.log('\n');

//Task
console.log('Task1');
class Rabbit2 extends Object {
  constructor(name) {
    super(); //Унаследованный конструктор класса должен вызывать super()
    this.name = name;
  }
}
let rabbit = new Rabbit2("Кроль");
console.log( rabbit.hasOwnProperty('name') ); //true

