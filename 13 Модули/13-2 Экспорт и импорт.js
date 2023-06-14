'use strict';
console.log('Экспорт и импорт');
//Не ставится точка с запятой после экспорта класса/функции

import User, { sayHi as hi, bye } from "./sayHi.js";

hi('Artem'); //Hello Artem
bye('Anton'); //Bye Anton

let newUser = new User ('Sergey'); //New User: Sergey