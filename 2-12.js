//?? Оператор нулевого слияния
//?? возвращает первый аргумент, если он не null/undefined
//Идентичен result = (a !== null && a !== undefined) ? a : b;

let firstName = null;
let lastName;
let nickName = "Суперкодер";

console.log(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер
console.log(firstName || lastName || nickName || "Аноним"); // Суперкодер
//|| возвращает истинное значение
//?? возвращает определенное значение
//Запрещено использовать вместе
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0