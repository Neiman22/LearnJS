"use strict";
console.log("Дата и время");
console.log('\n');
//Объект Date содержит дату и время, а также предоставляет методы управления ими

let now = new Date;
console.log(now); //Tue Apr 11 2023 14:46:34 GMT+0300 (Москва, стандартное время)

//Целое число, представляющее собой количество миллисекунд, 
//прошедших с начала 1970 года, называется таймстамп (англ. timestamp)
let Jan01_1970 = new Date(0);
console.log(Jan01_1970); //Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время)

let date = new Date("1985-04-16");
console.log(date); //Tue Apr 16 1985 04:00:00 GMT+0400 (Москва, летнее время)
console.log('\n');

//new Date(year, month, date, hours, minutes, seconds, ms)
//Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.
//year должен состоять из четырёх цифр.
//month начинается с 0 (январь) по 11 (декабрь).
//Параметр date здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1.
//Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.
let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date2); //Sat Jan 01 2011 02:03:04 GMT+0300 (Москва, стандартное время)

//getFullYear() - получить год (4 цифры)
//getMonth() - получить месяц, от 0 до 11.
//getDate() - получить день месяца, от 1 до 31, что несколько противоречит названию метода.
//getHours(), getMinutes(), getSeconds(), getMilliseconds() часы, минуты, секунды или миллисекунды
//getDay() - возвращает день недели от 0 (воскресенье) до 6 (суббота)
let date3 = new Date();
console.log(date3.getHours()); //9
console.log(date3.getUTCHours()); //6
console.log(date3.getTimezoneOffset()); //-180 возвращает разницу в минутах между UTC и местным часовым поясом
console.log('\n');

//Установка компонентов даты
/*
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)
*/
console.log(date3); //Wed Apr 12 2023 09:19:48 GMT+0300 (Москва, стандартное время)
date3.setHours(0);
console.log(date3); //Wed Apr 12 2023 00:19:59 GMT+0300 (Москва, стандартное время)
date3.setHours(0, 0, 0, 0);
console.log(date3); //Wed Apr 12 2023 00:00:00 GMT+0300 (Москва, стандартное время)
console.log('\n');

//Автоисправление даты
let date4 = new Date(2013, 0, 32); //32!!!
console.log(date4); //Fri Feb 01 2013 00:00:00 GMT+0400 (Москва, стандартное время)
let date5 = new Date(2016, 1, 28);
date5.setDate(date5.getDate() + 2);
console.log(date5); //Tue Mar 01 2016 00:00:00 GMT+0300 (Москва, стандартное время)
let date6 = new Date(2016, 0, 2);
date6.setDate(1);
console.log(date6); //Fri Jan 01 2016 00:00:00 GMT+0300 (Москва, стандартное время)
date6.setDate(0);
console.log(date6); //Thu Dec 31 2015 00:00:00 GMT+0300 (Москва, стандартное время)
console.log('\n');

//Преобразование к числу, разность дат
let date7 = new Date();
console.log(+date7); //1681280938215

//Date.now() возвращает текущую метку времени
let start = Date.now();
for (let i = 0; i < 10000000; i++) {
  let doSomeThing = i * i * i;
}
let end = Date.now();
console.log(end - start); //11ms

//Бентчмарк
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();
  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;
// добавляем для "разогрева" перед основным циклом
bench(diffSubtract);
bench(diffGetTime);
// bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}
console.log( 'Время diffSubtract: ' + time1 + 'мс' ); //171мс
console.log( 'Время diffGetTime: ' + time2 + 'мс' ); //4мс
console.log('\n');

//Разбор строки с датой
//Date.parse(str) считывает дату из строки
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms); //1327611110417
let date8 = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
console.log(date8); //Fri Jan 27 2012 00:51:50 GMT+0400 (Москва, стандартное время)
console.log('\n');

//Task1
let date9 = new Date(2012, 1, 20, 3, 12);
console.log(date9);
console.log('\n');

//Task2
let date10 = new Date(2012, 0, 3);
function getWeekDay(date) {
  let arr = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", ];
  return arr[date.getDay()];
}
console.log(getWeekDay(date10)); //"ВТ"
console.log('\n');

//Task3
let date11 = new Date(2012, 0, 3);
function getLocalDay(date) {
  return date.getDay() == 0 ? 7 : date.getDay();
}
console.log(getLocalDay(date11)); //"ВТ"
console.log('\n');

//Task4
let date12 = new Date(2015, 0, 2);
function getDateAgo(date, num) {
  let newDate = new Date();
  newDate.setDate(date.getDate() - 1 - num);
  return newDate.getDate();
}
console.log(getDateAgo(date11, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date11, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date11, 365)); // 2, (2 Jan 2014)
console.log('\n');

//Task4
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0); // если передать 0, то это значение будет соответствовать «один день перед первым числом месяца»
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1)) // 29 (високосный год, февраль).
console.log('\n');

//Task5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0); // если передать 0, то это значение будет соответствовать «один день перед первым числом месяца»
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1)) // 29 (високосный год, февраль).
console.log('\n');

//Task6
function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();;
}
console.log(getSecondsToday())
console.log('\n');

//Task7
function getSecondsToTomorrow() {
  return 86400 - getSecondsToday();
}
console.log(getSecondsToTomorrow())
console.log('\n');

//Task8
function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах
  if (diff < 1000) {
    return "прямо сейчас";
  }
  if (diff < 60000) {
    let sec = Math.round(diff / 1000);
    return `${sec} сек. назад`;
  }
  if (diff < 3600000) {
    let min = Math.round(diff / 60000);
    return `${min} мин. назад`;
  }
  return diff
}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) ); //31.12.2016, 20:00