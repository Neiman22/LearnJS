"use strict";
console.log("Деструктивное присваивание:");
console.log('\n');
//Деструктурирующее присваивание – это специальный синтаксис, 
//который позволяет нам «распаковать» массивы или объекты в несколько переменных

//Деструктуризация массива
let arr = ["Artem", "Pushkarev"];
let [firstName, surname] = arr;
console.log(firstName); //Artem
console.log(surname); //Pushkarev
console.log('\n');

//Остаточные параметры «…»
let [num1, num2, num3 = 3, ...rest] = [1, 2, , 6, 8, 10];
console.log(num2); //2
console.log(num3); //3
console.log(rest); //[6, 8, 10]
console.log('\n');

//Деструктуризация объекта
//Ключи должны совпадать
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let {num, width, title, height: h} = options;
console.log(num); //undefined
console.log(width); //100
console.log(title); //Menu
console.log(h); //200
console.log('\n');

//Остаток объекта «…»
let options2 = {
  title2: "Menu",
  height2: 200,
  width2: 100
};
let {title2, ...rest2} = options2;
console.log(title2); //Menu
console.log(rest2.height2); //200

//Вложенная деструктуризация
let options3 = {
  size: {
    width3: 100,
    height3: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

let {
  size: { // положим size сюда
    width3,
    height3
  },
  items: [item1, item2], // добавим элементы к items
  title3 = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;

//Мы можем передать параметры как объект, и функция немедленно деструктурирует его в переменные
let options4 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – взято из options,
  // width, height – используются значения по умолчанию
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

showMenu(options);