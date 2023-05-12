function find(object, path) {
  let arr = path.split('.');
  let currObj = object;

  for (let i = 0; i < arr.length; i++) {
    if(currObj.hasOwnProperty(arr[i])) {
      currObj = currObj[arr[i]];
    } else {
      return undefined;
    }
  }
  
  return currObj;
}

let object = { 
  user: { 
    name: { 
      first: 'John', 
      last: 'Snow' 
    }
  }
}

let path = 'user.name.first';

console.log(find(object, path));