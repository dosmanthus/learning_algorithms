function twoSum(numArray, sum) {
  var pairs = [];
  var hashtable = []; // 記錄已經計算過的counterpart
  for(var i = 0; i < numArray.length; i++) {
    var currentNum = numArray[i];
    var counterpart = sum - currentNum;
    if(hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currentNum, counterpart])
    }
    hashtable.push(currentNum)
  }
  return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7))
console.log(twoSum([40, 11, 19, 17, -12], 28))
