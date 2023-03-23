//Объекты в примитивы
//Не существует преобразования к логическому значению
//Числовое преобразование происходит, когда мы вычитаем объекты или применяем математические функции
//Преобразований к строке происходит, когда мы выводим на экран объект

//Если нет Symbol.toPrimitive, тогда JavaScript пытается найти методы toString и valueOf
//Существует всего 3 типа (хинта) для этого:
//"string" (для alert и других операций, которым нужна строка)
//"number" (для математических операций)
//"default" (для некоторых других операторов, обычно объекты реализуют его как "number")

let user = {
    name: 'Artem',
    money: 1000,

    [Symbol.toPrimitive](hint) {
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}

console.log(user);
console.log(+user);
console.log(user + 500);
console.log('\n');

let user2 = {
    name: "John",
    money: 1000,

    //Для хинта string
    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf(){
        return this.money;
    }
  
};
console.log(user2);
console.log(+user2);
console.log(user2 + 500);