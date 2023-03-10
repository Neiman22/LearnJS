//Цикл while
let i = 3
while (i) { //преобразуется в логический тип
    console.log (i);
    i--;
}
console.log ('\n')

//Цикл do while
let n = 0 
do {
    console.log (n);
    n++
} while (n < 3)
console.log ('\n')

//Цикл for
for (let i = 0; i < 3; i++){
    console.log (i)
}
console.log ('\n')

//Прерывание цикла break
let sum = 0;
while (true) {
    let value = 0;
    //let value = prompt('Enter num:');
    if (!value) break;
    sum += +value;
}
console.log('Summa:', sum);
console.log ('\n')

//Переход цикла contine
for (let i = 0; i < 10; i++){
    if (i % 2 == 0) continue;
    console.log (i);
}
console.log ('\n')

//Метка выхода из цикла
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = 0;
        //let input = prompt (`Coord (${i},${j})`, '');
        if (!input) break outer;
    }
}
console.log('Ready');
console.log ('\n')

//Task 
let m = 0;
while (++m < 5) console.log (m) //1...4
//вначале увеличение потом сравнение
m = 0;
while (m++ < 5) console.log (m) //1...5
//вначале славнение потом увеличение
console.log ('\n')

for (let i = 0; i < 5; i++) console.log (i) //0...4
for (let i = 0; i < 5; ++i) console.log (i) //0...4
console.log ('\n')

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log (i);
    }
}
console.log ('\n')

let v = 0
while (v < 3) {
    console.log (`Number: ${v}`);
    v++;
}
console.log ('\n')

let number = prompt('Введите больше 100');;
while (number) {
    if (number < 100) {
        number = prompt('Еще раз');
    } else {
        break;
    }
} 
console.log ('\n')


nextPrime:
for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log( i );
}