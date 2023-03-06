function disemvowel(str) {
    const vowels = 'AEIOUaeiou';
    return str.split('').filter(el => !vowels.includes(el)).join('');
}

console.log (disemvowel("No offense but,\nYour writing is among the worst I've ever read"))