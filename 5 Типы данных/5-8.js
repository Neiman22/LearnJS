"use strict";
console.log("WeakMap и WeakSet:");
console.log('\n');

let john = { name: "John" };
let array = [ john ];
john = null;
console.log(john); //null
console.log(array[0]); //{name: 'John'}
console.log('\n');

let artem = { name: "Artem" };
let map = new Map();
map.set(artem, '...');
artem = null;
for (let key of map.keys()) {
  console.log(key); //{name: "Artem"}
}
console.log('\n');

//WeakMap
//ключи в WeakMap должны быть объектами, а не примитивными значениями
let john2 = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john2, "...");
john2 = null; //объект john2 удалён из памяти!
console.log(weakMap.get(john2)); //undefined
console.log('\n');

//WeakMap используется в качестве дополнительного хранилища данных
let visitsCountMap = new WeakMap();

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

//Кеширование
let cashe = new WeakMap();
function process(obj){
  if (!cashe.has(obj)){
    let result = 'вычисления';
    cashe.set(obj, result);
  }
  return cashe.get(obj);
}

//WeakSet
//Объект присутствует в множестве только до тех пор, пока доступен где-то ещё
//Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой
let visitedSet = new WeakSet();

let john3 = { name: "John3" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john3); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john3); // John снова

console.log(visitedSet.has(john3));//true
console.log(visitedSet.has(mary));//false
