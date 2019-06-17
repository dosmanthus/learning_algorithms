function reverseArrayInPlace(arr) {
  // 只需執行一半的array，不然後半部會再回覆原本的
  for(var i = 0; i < arr.length / 2; i++) {
    // 如果是[1, 2, 3, 4, 5], 需相互調換的元素爲
    // 1 <-> 5, 2 <-> 4, 3 <-> 3
    // 換成index, 0 <-> 4, 1 <-> 3, 2 <-> 2
    // i <-> arr.length - 1 - i
    var tempValue = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempValue;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]))
