function getParticipants(hand){
    if (hand === 0) {return 0}
    return Math.ceil((1 + Math.sqrt(1 + 8 * hand)) / 2);
}

console.log(getParticipants(0))
console.log(getParticipants(1))
console.log(getParticipants(3))
console.log(getParticipants(6))
console.log(getParticipants(7))