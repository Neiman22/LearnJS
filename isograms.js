function isIsogram (str) {
    for (let i = 0; i < str.length; i++) {
        for (let n = i + 1; n < str.length; n++){
            if (str[i].toLowerCase() === str[n].toLowerCase()) {
                return false;
            }
        }
    } 
    return true;
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("moOse"))
console.log(isIsogram("aba"))