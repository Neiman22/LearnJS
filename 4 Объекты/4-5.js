//Функция конструктор для многократного создания однотипных объектов
//Имя с большой буквы
//Выполняется только с помощью оператора "new"
function User (name) {
    this.name = name;
    this.Admin = false;
}

let user = new User ('Artem');
// this = {};  (неявно)
// return this;  (неявно)

console.log(user.name); //"Artem"
console.log(user.Admin); //false
let user2 = new User ('Anton');
console.log(user2.name); //"Anton"
console.log('\n');

//Проверка создания с использованием new
function User2 (name) {
    if(new.target) {
        console.log(name);
    }
}
User2('Artem'); //не выполниться
new User2('Anton'); //Anton
console.log('\n');

//Применение return
//При вызове return с объектом, вместо this вернётся объект
//При вызове return с примитивным значением, оно проигнорируется
function BigUser() {
    this.name = "John";
      return { name: "Godzilla" };
}
console.log(new BigUser().name); //Godzilla

function SmallUser() {
    this.name = "John";
    return 5; //возвращает this
}
console.log(new SmallUser().name); //John
console.log('\n');

//Создание методов в конструкторе
function User3(name) {
    this.name = name;
    this.sayHi = function() {
        console.log('My name is: ', this.name)
    }
}
let user3 = new User3('Artem');
user3.sayHi(); //My name is: Artem
console.log('\n');

//Task
let obj = {}
function A() {
    return obj
}
function B() {
    return obj
}
let a = new A();
let b = new B();
console.log (a == b); //true
console.log('\n');

function Calculator() {
    this.read = function() {
        this.a = +prompt('a = ');
        this.b = +prompt('b = ');
    }

    this.mul = function() {
        return this.a * this.b
    }
    this.sum = function() {
        return this.a + this.b
    }

    this.mul = function() {
        return this.a * this.b
    }

}
let calculator = new Calculator();
calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
console.log('\n');

function Accumulator(start) {
    this.value = start;
    this.read = function() {
        this.value += +prompt('Your num:');
    }
}
let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read();
console.log(accumulator.value)