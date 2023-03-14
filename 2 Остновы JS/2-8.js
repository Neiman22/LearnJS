//Операнд = аргумент
//Оператор [унарный, бинарный]

//Математические
//+ - * / %(остаток от деления) **(степень)
console.log (8 % 3); //2
console.log (2 ** 3); //8
console.log (4 ** (1/2)); //корень
console.log ('\n')

//Сложение строк
console.log('моя' + 'строка');
console.log('1' + 1); //11
console.log(1 + '1'); //11
console.log(1 + 2 + '1'); // 31
console.log(6 - '1'); // 5
console.log('6' / '2'); // 3
console.log ('\n')

//Приведение к числу
//Унарный + = Number()
console.log(+true); //1
console.log ('2' + '5'); //25
console.log (+'2' + +'5'); //7
console.log ('\n')

//Приоритеты
//у+ у- ** * / + - =

//Присваивание
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log (a); //3
console.log (c); //0
console.log ('\n');

//Сокращенная арифметика
let n = 5;
console.log (n += 5); //10
console.log (n *= 1.5); //15
let m = 4;
console.log (m *= 3 + 2); //20
console.log ('\n');

//Инкремент
let counter = 1
let s = ++counter;
console.log(s); //2
let o = counter++;
console.log(o); //2
console.log(counter); //3
console.log ('\n');

//Побитовые операторы
//&(И) |(ИЛИ) ^(ИСКЛ) ~(НЕ) <<(Левый сдвиг) >>(Правый сдвиг)

//Оператор запятая возвращает последнее значение
let zpt = (1 + 2, 3 + 4);
console.log (zpt);
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    //
}
console.log ('\n');

//Task
console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px") //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log ("4px" - 2); //NaN
console.log ("  -9  " + 5); //  -9  5
console.log ("  -9  " - 5); // -14
console.log (null + 1); 1
console.log (undefined + 1); //NaN
console.log (" \t \n" - 2); //-2
