"use strict";
console.log("JSON:");
console.log('\n');
//JSON общий формат для представления значений и объектов

//JSON.stringify для преобразования объектов в JSON
//Строки используют двойные кавычки
//Имена свойств объекта также заключаются в двойные кавычки
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);
console.log(json); //{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
console.log(typeof json); //string
console.log('\n');

//JSON для примитивов
console.log(JSON.stringify(1)); //1
console.log(JSON.stringify("test")); //"test"
console.log(JSON.stringify(true)); //true
console.log(JSON.stringify([1, 2, 3])); //[1,2,3]
console.log('\n');

//Пропуск значений
//Свойства-функции (методы)
//Символьные ключи и значения
//Свойства, содержащие undefined
//Не должно быть циклических ссылок

let user = {
  sayHi() { // будет пропущено
    alert("Hello");
  },
  [Symbol("id")]: 123, // также будет пропущено
  something: undefined // как и это - пропущено
};
console.log(JSON.stringify(user)); //{}

//Исключаем и преобразуем: replacer
//JSON.stringify(value, [replacer, space])
//replacer - Массив свойств для кодирования или функция соответствия function(key, value)
//space - Дополнительное пространство (отступы), используемое для форматирования
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};
room.occupiedBy = meetup; // room ссылается на meetup

console.log(JSON.stringify(meetup, ['title', 'participants', 'name'])); 
//{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}]}
console.log(JSON.stringify(meetup, (key, value) => (key == 'occupiedBy') ? undefined : value, '  ')); 
/*
{
  "title": "Conference",
  "participants": [
    {
      "name": "John"
    },
    {
      "name": "Alice"
    }
  ],
  "place": {
    "number": 23
  }
}
*/
console.log('\n');

//toJSON
let room2 = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let apart = {
  title: "Conference",
  number: room2,
};
console.log(JSON.stringify(room2)); //23
console.log(JSON.stringify(apart)); //{"title":"Conference","number":23}
console.log('\n');

//JSON.parse
//JSON.parse(str, [reviver]);
//reviver - Необязательная функция, которая будет вызываться для каждой пары (ключ, значение)
let numbers = "[0, 1, 2, 3]";
let newNumbers = JSON.parse(numbers);
console.log(newNumbers[2]); //2

let user2 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user2 = JSON.parse(user2)
console.log(user2.age); //35

//Использование reviver
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
str = JSON.parse(str, (key, value) => (key == 'date') ? new Date (value) : value);
console.log(str.date.getDate()); //30

//Task1
let user3 = {
  name: "Василий Иванович",
  age: 35
};
user3 = JSON.stringify(user3);
console.log(user3);
user3 = JSON.parse(user3);
console.log(user3);
console.log('\n');

//Task2
let room3 = {
  number: 23
};

let meetup3 = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room3,
};

// цикличные ссылки
room3.occupiedBy = meetup3;
meetup3.self = meetup3;

console.log( JSON.stringify(meetup3, (key, value) =>(key != "" && value == meetup3) ? undefined : value, ' '));
/*
{
 "title": "Совещание",
 "occupiedBy": [
  {
   "name": "Иванов"
  },
  {
   "name": "Петров"
  }
 ],
 "place": {
  "number": 23
 }
}
*/
