//Логические операторы
// || (ИЛИ)
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log('\n'); 

//Цепочка || возвращает первое истинное или последнее ложное
console.log(0 || 1 || 2 ); //1
console.log(true || 'string' || 10); //true
console.log(null ||5); //5
console.log(null || undefined || 0); //0
console.log('\n');

//&& (И)
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log('\n');

//Цепочка && возвращает первое ложное илм последний истинный
console.log(1 && 0 && null); //0
console.log(1 && 5 && 3); //3
console.log(null && 5 && true); //null
console.log('\n');

//Приоритет && > ||

//Оператор ! (НЕ)
console.log (!true) //false
console.log (!0) //true

//Оператор !! приводит к Boolean
console.log (!!'string') //true
console.log (!!null) //false
console.log('\n');

//Task
console.log(null || 2 || undefined); //2
console.log( console.log(1) || 2 || console.log(3)); //c(1), 2
console.log( 1 && null && 2); //null
console.log( console.log(1) && console.log(2)); //c(1), undefined
console.log( null || 2 && 3 || 4 ); //3
let age = 15; if(age >= 14 && age <= 90) {console.log('Diapazon')};
age = 11; if(!(age >= 14 && age <= 90)) {console.log('Ne Diapazon')};
age = 10; if(age < 14 || age > 90) {console.log('Ne Diapazon')};
if (-1 || 0) console.log( 'first' ); //first
if (-1 && 0) console.log( 'second' ); //-
if (null || -1 && 1) console.log( 'third' ); //third
let isAdmin = prompt ('Кто там?');
if (isAdmin === 'Админ') {
    let password = prompt ('Пароль');
    if(password === 'Я главный') {
        console.log('Здравствуйте');
    } else if (password === null || password === '') {
        console.log('Отменено');
    } else {
        console.log('Неверный пароль');
    }
} else if(isAdmin === null || isAdmin === '') {
    console.log('Отменено');
} else {
    console.log('Я вас не знаю');
}

