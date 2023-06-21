'use strict';
console.log('Eval: выполнение строки кода');


let code = 'console.log("Hello Eval")';
eval(code); //Hello Eval

let value = eval('let i = 0; ++i');
console.log(value); //1

let a = 1;
function f() {
  let a = 2;
  eval('console.log(a)');
}
f();//2

//В строгом режиме у eval имеется своё лексическое окружение