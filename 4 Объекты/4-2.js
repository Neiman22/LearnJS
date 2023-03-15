//Копирование объектов по ссылке
const user = {
    name: 'Artem',
}
const admin = user;
user.name = 'Anton';
console.log (admin.name); //Anton
console.log('\n');

//Cравнение объектов
const a = {};
const b = a;
const c = {}
console.log(a == b); //true
console.log(a === b); //true
console.log(a == c); //false
console.log(a === c); //false
console.log('\n');

//Клонирование объекта
let user2 = {
    name: "John",
    age: 30
};
let clone = {};
for (let prop in user2) {
    clone[prop] = user2[prop];
}
console.log(clone);
console.log('\n');

//Object.assign
let user3 = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user3, permissions1, permissions2);
console.log(user3); //{ name: "John", canView: true, canEdit: true }
let clone2 = Object.assign({}, user3);
console.log(clone2); //{ name: "John", canView: true, canEdit: true }
let clone3 = {...user3};
console.log(clone3); //{ name: "John", canView: true, canEdit: true }
console.log('\n');

//Вложенное клонирование
let user4 = {
    name: "John",
    age: 35,
    sizes: {
      height: 182,
      width: 50
    }
};

function nestedCloning (obj) {
    let clone = Object.assign({}, obj);
    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            clone[prop] = nestedCloning(obj[prop]);
        } else {
            clone[prop] = obj[prop];
        }
    }
    return clone;
}
let clone4 = nestedCloning(user4);
console.log(clone4);
user4.sizes.width = 53;
console.log(user4);
console.log(clone4);
