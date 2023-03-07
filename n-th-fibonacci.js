/*
1 0
2 1
3 1
4 2
5 3
6 5
7 8
8 13
*/

function nthFibo (num) {
    if (num === 1) {
        return 0;
    }
    if (num === 2 || num === 3) {
        return 1;
    } else {
        let a = 1;
        let b = 1;
        for (let i = 3; i < num; i++){
            let c = a + b;
            a = b;
            b = c;
        }
        return b
    }
}

function nthFiboRec (num) {
    return num === 1 ? 0 : num < 4 ? 1 : nthFiboRec(num - 1) + nthFiboRec(num - 2);
}

console.log (nthFibo(1))
console.log (nthFibo(2))
console.log (nthFibo(3))
console.log (nthFibo(4))
console.log (nthFibo(5))

console.log (nthFiboRec(1))
console.log (nthFiboRec(2))
console.log (nthFiboRec(3))
console.log (nthFiboRec(4))
console.log (nthFiboRec(5))