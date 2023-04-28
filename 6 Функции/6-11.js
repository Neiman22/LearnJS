"use strict";
console.log("У стрелочных функций нет «this»");
//Стрелочные функции нельзя использовать с new

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => console.log(this.title + ": " + student)
    );
  },

  showList2() {
    this.students.forEach(function(student){
      //console.log(this.title + ": " + student);
      //Uncaught TypeError: Cannot read properties of undefined (reading 'title')
    });
  }
};
group.showList();
group.showList2();
console.log('\n');
//bind(this) создаёт «связанную версию» функции
//=> ничего не привязывает. У функции просто нет this
//При получении значения this – оно, как обычная переменная, берётся из внешнего лексического окружения.

//Стрелочные функции не имеют «arguments»
function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}
function sayHi(who) {
  console.log('Hello ' + who);
}
let sayHiDeffer = defer(sayHi, 2000);
sayHiDeffer('Artem'); //Hello Artem