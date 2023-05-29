"use strict";
console.log(`Колбэки`);

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
  if(error) {
    throw new Error(error);
  } else {
    console.log(`Здорово, скрипт ${script.src} загрузился`);
    console.log( _ ); // функция, объявленная в загруженном скрипте
  }

});