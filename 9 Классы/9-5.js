"use strict";
console.log("Расширение встроенных классов");

class PowerArray extends Array {
  isEmpty () {
    return this.length === 0;
  }
}

let arr = new PowerArray (1, 2, 5, 10, 50);
console.log(arr.isEmpty()); //false
let filteredArr = arr.filter(item => item >= 51);
console.log(filteredArr.isEmpty()); //true