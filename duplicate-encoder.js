function duplicateEncode(word) {
    return word.toLowerCase(word).split('').map((el, ind, arr) => {
        return arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')';
    }).join('')
}

console.log (duplicateEncode("din"));
console.log (duplicateEncode("recede"));