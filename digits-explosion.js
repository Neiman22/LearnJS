function explode (str) {
    return str.split('').map(el => el.repeat(+el)).join('');
}
console.log(explode("312"));