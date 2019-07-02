function mergeSort(array) {
  // 遞迴函式base case：當陣列被拆到只剩一個元素時
  if(array.length < 2) return array;

  // else 拆分
  var middleIdx = Math.floor(array.length / 2);
  var firstHalf = array.slice(0, middleIdx);
  var secondHalf = array.slice(middleIdx);

   // 遞迴函式
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  // 合併2個sorted array
  var result = [];
  while(arr1.length && arr2.length) {
    var minElement = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    result.push(minElement)
  }
  if(arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);

  return result;
}

console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, -12, 198]));
