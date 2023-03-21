let base_array = [1, 2, 3, 4, 5];
let call = function(item) { return Math.pow(item, 3)};

Array.prototype.myMap = function (callback, context) {
  let newArr = new Array(this.length);
  
  for (var i = 0; i < this.length; i++) {
      if (i in this) newArr[i] = callback.call(context, this[i], i, this);
  }

  return newArr;
}

console.log(base_array.myMap(call));

