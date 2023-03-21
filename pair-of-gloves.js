function numberOfPairs(gloves) {
  let newArr = gloves.slice(0);
  newArr.sort();
  let result = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
        result++;
        i++;
    }
  }
  return result
}

console.log(numberOfPairs(['gray','black','purple','yellow','purple','gray','black']));//3