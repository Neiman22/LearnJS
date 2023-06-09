'use strict'
console.log('Асинхронные итераторы');

let range = {
  from: 1,
  to: 5,
  [Symbol.asyncIterator]() {
  //Чтобы сделать объект асинхронно итерируемым, он должен иметь метод Symbol.asyncIterator
    return {
      current: this.from,
      last: this.to,

      async next() {
        //Этот метод должен возвращать объект с методом next(), который в свою очередь возвращает промис
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {
  for await (let value of range) { // (4)
    console.log(value); // 1,2,3,4,5
  }
})();

//Асинхронные генераторы
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
  }
})();