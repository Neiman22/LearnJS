function sortByBit(arr) {
    function toBit(num) {
        let result = 0;
        let toTwo = num.toString(2);
        for (let i = 0; i < toTwo.length; i++){
            if (toTwo[i] === '1') {
                result++;
            }
        }
        return result;
    }
    arr.sort((a,b) => {
        if (toBit(a) === toBit(b)) {
            return a - b;
        } else {
            return toBit(a) - toBit(b);
        }
    });
    return arr; 
}

function sortByBit2 (arr) {
    let toBit = (num) => num.toString(2).split('1').length;
    return arr.sort((a, b) => toBit(a) - toBit(b) || a - b)
}

console.log(sortByBit2([3, 8, 3, 6, 5, 7, 9, 1])); //[1, 8, 3, 3, 5, 6, 9, 7]