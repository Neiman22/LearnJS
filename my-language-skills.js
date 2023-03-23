function myLanguages(results) {
  let newArr = [];
  for (let prop in results) {
    if (results[prop] >= 60) {
      newArr.push(prop);
    }
  }
  newArr.sort((a, b) => results[b] - results[a])
  return newArr;
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})) // ["Ruby", "Python"]
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71})) // ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20})) // []