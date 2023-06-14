export function sayHi (user) {
  console.log('Hello ' + user);
}

function sayBye (user) {
  console.log('Bye ' + user);
}

//Экспорт отдельно от объявления
export {sayBye as bye}

//Экспорт по умолчанию
//Заметим, в файле может быть не более одного export default
export default class {
  constructor(name) {
    this.name = name;
    console.log('New User: ' + name);
  }

}