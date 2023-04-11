"use strict";
console.log("Map и Set:");

//Map – это коллекция ключ/значение, как и Object 
//Но основное отличие в том, что Map позволяет использовать ключи любого типа

let map = new Map();
console.log(map);

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ
console.log(map);
console.log(map.get("1")); //str1;
console.log(map.get(1)); //num1;
console.log(map.size); //3
console.log('\n');

//map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false
//map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key
//map.clear() – очищает коллекцию от всех элементов.

//Map может использовать объекты в качестве ключей
let john = { name: "John" };
let visitsCountMap = new Map();
visitsCountMap.set(john, '123');
console.log(visitsCountMap.get(john)); //123
console.log('\n');

//Перебор Map
let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

//map.keys() – возвращает итерируемый объект по ключам,
//map.values() – возвращает итерируемый объект по значениям,
//map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of
for (let key of recipeMap.keys()) {
  console.log(key);
}

for (let key of recipeMap.values()) {
  console.log(key);
}

for (let key of recipeMap.entries()) {
  console.log(key);
}
console.log('\n');

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
console.log('\n');

//Object.entries: Map из Object
let obj = {
  name: "John",
  age: 30
};

let map2 = new Map(Object.entries(obj));
console.log(map2);
console.log(map2.get('name')); //John
console.log('\n');

//Object.fromEntries: Object из Map
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
console.log(prices); //{banana: 1, orange: 2, meat: 4}

//Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз
let set = new Set();

let artem = { name: "Artem" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(artem);
set.add(pete);
set.add(mary);
set.add(artem);
set.add(mary);
console.log(set);
console.log(set.size);
console.log('\n');

//Task
function unique(arr) {
  let set = new Set();
  arr.forEach(el => set.add(el));
  return set
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) ); // Hare,Krishna,:-O