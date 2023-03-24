function runLengthEncoding (str) {
  let newArr = [];
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num += 1;
    } else {
      newArr.push([num, str[i]])
      num = 1;
    }
  }
  return newArr;
}

function runLengthEncoding2 (str) {
  let newArr = [];
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num += 1;
    } else {
      newArr.push([num, str[i]])
      num = 1;
    }
  }
  return newArr;
}

console.log(runLengthEncoding("hello world!"));
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"));
 // => [[34,'a'], [3,'b']]