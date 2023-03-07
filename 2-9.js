//Операторы сравнения
//Возвращает Boolean
let result = 5 > 4; //true
console.log (result);

//Строки сравниваются посимвольно в кодировке Unicode
//строчные буквы > заглавный
console.log('Коты' > 'Кода') //true
console.log('к' > 'К') //true

//Привидение к числу ==
console.log('02' > 1); //true
console.log(true == 1); //true

//Строгое равенство === и не равенство !==
//Проверяет типы
console.log(0 == false); //true
console.log(0 === false); //false

//Null и undefined
console.log (null === undefined); //false
console.log (null == undefined); //true
console.log('\n');
//Сравненния преобразуют null в число 0
//Сравненния преобразуют undefined в NaN
//== значения null и undefined не приводит, равны только друг другу

//Task
console.log(5 > 4); //true
console.log("ананас" > "яблоко"); //false
console.log("2" > "12"); //true
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false