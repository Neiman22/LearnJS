//Тип данных Symbol
//примитивный тип данных, использующийся для создания уникальных идентификаторов.
//не перебирается циклом for..in

let id = Symbol('id');
let id2 = Symbol('id');
console.log(id == id2); //false - символы уникальны
//alert(id); //ошибка - не преобразует в строку
//alert(id.toString()); //Symbol(id)
//alert(id.description); //id

//«Скрытые» свойства
let id4 = Symbol('id');
let user = {
    name: 'Artem',
    [id4]: 123
}
let id3 = Symbol('id');
user[id3] = 1;
console.log(user[id3]); //1
console.log(user[id4]); //123

//Object.assign - клонирует символы
let id5 = Symbol('id');
let user2 = {
    [id5]: 456
}
let clone = Object.assign({}, user2);
console.log(clone[id5]); //456

//Глобальные символы
let id6 = Symbol.for('id user');
let again = Symbol.for('id');
console.log(id6 == again); //true
console.log(Symbol.keyFor(id6)); //id user

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name2");
console.log( Symbol.keyFor(globalSymbol) ); // name - глобальный символ
console.log( Symbol.keyFor(localSymbol) ); // undefined - неглобальный символа
console.log( localSymbol.description ); // name2