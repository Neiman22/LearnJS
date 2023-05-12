function unluckyDays(year){
  let count = 0;
  for (let i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5) {
      count++
    }
  }
  return count;
}

console.log(unluckyDays(1586))// 1
console.log(unluckyDays(1001))// 3
console.log(unluckyDays(2819))// 2
console.log(unluckyDays(2792))// 2
console.log(unluckyDays(2723))// 2
console.log(unluckyDays(1909))// 1
console.log(unluckyDays(1812))// 2
console.log(unluckyDays(1618))// 2
console.log(unluckyDays(2132))// 1
console.log(unluckyDays(2065))// 3