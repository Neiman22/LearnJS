//Конструкция switch
let a = 2 + 2;
switch (a) {
    case 3:
    case 5:
        console.log('Не верно');
        break;
    case 4:
        console.log('Точно');
        break;
    default:
        console.log('Нет таких значений'); 

}
console.log('\n');

//Task
let browser = 'Safari';
if (browser === 'Edge') {
    console.log("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}
console.log('\n');

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0: 
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}
