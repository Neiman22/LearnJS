function calculate2 (...arg1) {
    let sum1 = 0;
    [...arg1].forEach(element => {
        sum1 += +element;
    });
    return (...arg2) => {
        let sum2 = 0;
        [...arg2].forEach(element => {
            sum2 += +element;
        });
        return sum1 + sum2
    }
}
function calculate (...arg1) {
    return (...arg2) => {
        return [...arg1, ...arg2].reduce((sum, num) => sum + num)
    }
}

console.log(calculate(1)(1)) // должно вернуть 2
console.log(calculate(1,1)(1)) // должно вернуть 3
console.log(calculate(1,1)(1,-1)) // должно вернуть 2
console.log(calculate(2,4)(3,7,1)) // должно вернуть 17