let head = (array) => array[0];
let tail = (array) => array.slice(1);
let init = (array) => array.slice(0, -1);
let last = (array) => array[array.length - 1];

console.log (head([5,1])); //5);
console.log (tail([1]))//, []);
console.log (init([1,5,7,9]))//, [1,5,7]);
console.log (last([7,2]))//, 2);