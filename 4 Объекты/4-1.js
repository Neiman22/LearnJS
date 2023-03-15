//Объекты
let user = new Object; //конструктор объекта
const user2 = { //литерал объекта
    name: 'Artem',
    age: 35,
    "like birds": true,
}; 

user2.isAdmin = true; //const объект изменен
console.log(user2["like birds"]); //вывод составного ключа
let key = 'age';
console.log(user2[key]); //вывод переменной-ключа

//Вычисляемые свойства
let fruit = 'apple';
let bag = {
    [fruit]: 5,
}
console.log(bag.apple); //5

//Свойства из переменной
//Нет ограничений на имена свойств (let, for, return...)
function makeUser (name, age) {
    return {
        name, //тоже самое что name: name
        age, //тоже самое что age: age
    }
}
let user3 = makeUser ('Anton', 36);
console.log(user3.name); //Anton

//Проверка существования свойств in
//Используется при ключе с заданным undefined
let user4 = {
    name: 'John',
    age: 30
}
console.log('age' in user4); //true
console.log('bla' in user4); //false
let key2 = 'name';
console.log(key2 in user4); //true

let obj = {
    test: undefined,
}
console.log('test' in obj); //true
console.log ('\n');

//Цикл for...in
let user5 = {
    name: 'John',
    age: 30,
    isAdmin: true,
}
for (let key in user5) {
    console.log(key);
    console.log(user5[key]);
}
console.log ('\n');

//Упорядочивание
//Cвойства с целочисленными ключами сортируются по возрастанию, 
//Остальные располагаются в порядке создания
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
};
for (let prop in codes) {
    console.log (prop) //1, 41, 44, 49
}
let user6 = {
    name: "John",
    surname: "Smith"
};
user6.age = 25;
for (let prop in user6) {
    console.log(prop); //name, surname, age
}
//Удаление delete obj.prop
console.log ('\n');

//Task
let user7 = {}
user7.name = 'John';
user7.surname = 'Smith'
user7.name = 'Pete';
delete user7.name;


function isEmpty (schedule) {
    for (let prop in schedule) {
        return false;
    }
    return true;
}
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false
console.log ('\n');


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (prop in salaries) {
    sum += salaries[prop];
}
console.log (sum); //390
console.log ('\n');

function multiplyNumeric (obj) {
    for (let prop in obj) {
        if (typeof obj[prop] == 'number') {
            obj[prop] *= 2;
        }
    }
} 
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
console.log(menu);  
/* после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
*/