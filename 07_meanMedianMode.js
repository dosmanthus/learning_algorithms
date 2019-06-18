/**
 * 平均數（mean）、中位數（Median）和眾數（Mode）
 **/

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

function getMean(arr) {
  var sum = 0;
  arr.forEach(num => {
    sum += num;
  })
  return sum / arr.length;
}

function getMedian(arr) {
  // 排序arr
  arr.sort(function(a, b) { return a - b });
  if(arr.length % 2 !== 0) {
    // case 1: 奇數arr，回傳最中間的元素
    var index = Math.floor(arr.length / 2);
    return arr[index]
  } else {
    // case 2: 偶數arr，計算中間2個數的平均值
    var mid1 = arr[arr.length / 2 - 1];
    var mid2 = arr[arr.length / 2];
    return (mid1 + mid2) / 2;
  }
}

function getMode(arr) {
  var numHash = {};
  arr.forEach(num => {
    if(!numHash[num]) numHash[num] = 0;
    numHash[num]++;
  })

  //  find max frequency
  var maxFrequency = 0;
  var modes = [];
  for(var num in numHash) {
    if(numHash[num] > maxFrequency) {
      modes = [num];
      maxFrequency = numHash[num];
    } else if(numHash[num] === maxFrequency) {
      modes.push(num)
    }
  }
  // edge case, 每個數字的次數都一樣，
  // e.g. [9, 10, 23, 10, 23, 9]
  if(modes.length === Object.keys(numHash).length) {
    modes = [];
  }
  return modes;
}

console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]))
console.log(meanMedianMode([9, 10, 23, 10, 23, 9]))
