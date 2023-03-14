//Стрелочные функции
let sum = (a, b) => a + b;
console.log (sum (5, 10));

let sum2 = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
};
console.log(sum2(6, 7));
console.log('\n');

//Task
let ask = (question, yes, no) => confirm(question) ? yes() : no();
  
ask(
    "Вы согласны?",
   () => console.log("Вы согласились."),
   () => console.log("Вы отменили выполнение.")
);