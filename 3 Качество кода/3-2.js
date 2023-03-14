//Пробел между параметрами
//Фигурная скобка на той же строке
//Пробелы вокруг операторов
//Точка с запятой обязательна
//Пробел между аргументами
//Строки не длинные
//else без перевода строки
//Пробелы между вложенным вызовом
//Пустая строка между логическими блоками

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
    alert(`Power ${n} is not supported,
        please enter a non-negative integer number`);
} else {
    alert( pow(x, n) );
}

//Task 
function pow(x, n) {
    let result=1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

//let x = prompt("x?",'');
//let n = prompt("n?",'');

if (n <= 0) {
  alert(`Степень ${n} не поддерживается, 
    введите целую степень, большую 0`);
} else {
  alert( pow(x,n) );
}