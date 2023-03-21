//Опциональная цепочка ?.
//останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null
//не используется для записи

//obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined
//obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined
//obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined

let user = {}
console.log (user?.adress?.street); //undefined

let html = document.querySelector('.elem')?.innerHTML 
console.log (html); //undefined
//console.log (user2?.adress.street); //Error

let user3 = null;
let x = 0;
user3?.sayHi(x++); //не выполниться
console.log(x);
console.log ('\n')

//Применение для функций
let userAdmin = {
  admin() {
    console.log('Я админ');
  }
}
let userGuest = {};
userAdmin.admin?.() //Я админ
userGuest.admin?.() //не выполниться
console.log ('\n')

//Применение для []
let key = 'firstName';
let user4 = {
  firstName: 'Artem'
}
let user5 = null;
console.log(user4?.[key]) //Artem
console.log(user5?.[key]) //undefined
