function brightest(array) {
    const newArr = array;
    newArr.sort((a, b) => {
        const brightest1 = Math.max(parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16))
        const brightest2 = Math.max(parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16))
        return brightest1 - brightest2;
    });
    return newArr[0];
}

console.log(brightest(["#001000", "#000000"])) // "#001000"
console.log(brightest(["#ABCDEF", "#123456"])) // "#ABCDEF"
console.log(brightest(["#00FF00", "#FFFF00", "#01130F"])) // "#00FF00"