"use strict";
console.log("Приватные и защищённые методы и свойства");

//Защищенные методы
//Защищённые поля наследуются
class CoffeeMachine {
  _waterAmount = 0;

  constructor (power) {
    this._power = power;
    console.log( `Создана кофеварка, мощность: ${power}`);
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount; 
  }

  get power() {
    return this._power;
  }
}
let coffeeMachine = new CoffeeMachine(100);
//coffeeMachine.waterAmount = -20;
console.log(`Мощность: ${coffeeMachine.power}W`);

//Приватные свойства и методы #
//Приватные поля не конфликтуют с публичными
class CoffeeMachine2 {
  #waterAmount = 200;
  #checkWater(value) {
    if (value < 0)  throw new Error("Отрицательный уровень воды");
    if (value > this.#waterAmount)  throw new Error("Слишком много воды");
  }
}
let coffeeMachine2 = new CoffeeMachine2();
//coffeeMachine.#checkWater(); // Error
//coffeeMachine.#waterLimit = 1000; // Error

