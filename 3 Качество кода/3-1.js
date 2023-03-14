//Выполнение кода можно также приостановить с помощью команды debugger
function hello(name) {
    let phrase = `Привет, ${name}!`;
  
    debugger;  // <-- тут отладчик остановится
  
    say(phrase);
}