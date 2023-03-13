function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) { 
        return 0;
    }
    let newArr = arrayOfArrays.map((a) => (a ? a.length : 0)).sort((a, b) => a - b);
    //return newArr;
    for (let i = 0; i < newArr.length - 1; i++){
        if (newArr[i] === 0) {
            return 0;
        } else if (newArr[i] + 1 != newArr[i + 1]) {
            return newArr[i] + 1;
        }
    }
}
console.log(getLengthOfMissingArray([[3, 4, 3],
    [0],
    [3, 4, 2, 0, 4],
    [],
    [0, 2, 3, 1],
    [4, 2, 3, 4, 2, 3]] )); //2