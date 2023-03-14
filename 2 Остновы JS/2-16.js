//Function Exspression
let sayHi = function () {
    return 'Hello!';
}; //точка с запятой в конце!!!
console.log (sayHi); //код функции
console.log (sayHi()); //'Hello!'
let clone = sayHi;
console.log (clone()); //'Hello!'
console.log ('\n');

//Колбэки - обратный вызов
function ask (question, yes, no) {
    confirm(question) ? yes() : no()
}

function showOK () {
    console.log ('Вы подтвердили выполнение');
}

function showCansel () {
    console.log ('Вы отменили выполнение');
}

ask('Вы согласны?', showOK, showCansel);
console.log ('\n');

//Function Declaration может быть вызвана раньше, чем она объявлена
//Function Declaration иммет блочную область видимости
//Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться
let age = prompt("Сколько Вам лет?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    console.log ("Вы несовершеннолетний");
  };
} else {
  welcome = function() {
    console.log ("Вы совершеннолетний");
  };
}
welcome();