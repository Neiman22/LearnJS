'use strict';
console.log('Модули, введение');

//В модулях всегда используется режим use strict
//Своя область видимости переменных
//Код в модуле выполняется только один раз при импорте
//В модуле «this» не определён
import { sayHi } from "./sayHi.js";
sayHi('Artem'); //Hello Artem