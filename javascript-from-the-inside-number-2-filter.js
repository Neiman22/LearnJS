let base_array = [1, 2, 3, 4, 5];
let call = function(x, i, a) { a.push(x); return this[i] == i; };

Array.prototype.myFilter = function(callback, content) {
    let length = this.length;
    let newArr = []
    for (var i = 0; i < length; i++) {
      if (i in this && callback.call(content, this[i], i, this)) {
        newArr.push(this[i])
      }
    }
    return newArr
}

console.log(base_array.myFilter(call)); //[2, 4]