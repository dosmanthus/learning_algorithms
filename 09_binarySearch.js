/**
 * Binary Search 二元搜尋法，日常生活中可能已經使用，
 * 例如當用字典查"House"這個單子時，會先對半翻開字典，
 * 此時落在L的章節，因為H在L之前，所以就可以直接略過字典的後半部，
 * 接著再翻到前半部的一半...，以此類推。
 **/

function binarySearch(numArray, key) {
  // 切半
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];
  if(middleElem === key) return true;

  if(numArray.length === 1) return false;

  else if(middleElem < key) {
    return binarySearch(numArray.splice(middleIdx, numArray.length),key)
  } else if(middleElem > key) {
    return binarySearch(numArray.splice(0, middleIdx),key)
  }
  else return false;
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56))

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 15))
