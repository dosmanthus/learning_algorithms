function CaesarCipher(string, number) {
  number = number % 26;
  // string to lowercase
  var lowerCaseString = string.toLowerCase();
  var alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for(var i = 0; i < lowerCaseString.length; i++) {
    var originIndex = alphabetArray.indexOf(lowerCaseString[i]);
    if(originIndex > -1) {
      // 英文字母
      var newIndex = originIndex + number;
      if(newIndex > 25) {
        newIndex = newIndex - 26;
      } else if(newIndex < 0) {
        newIndex = 26 + newIndex;
      }
      // 檢查是否是大寫字母
      if(string[i] === string[i].toUpperCase()) {
        newString += alphabetArray[newIndex].toUpperCase();
      } else {
        newString += alphabetArray[newIndex];
      }
    } else {
      // 其他符號
      newString += lowerCaseString[i];
    }
  }

  return newString
}

console.log(CaesarCipher('Zoo keeper', 2))
console.log(CaesarCipher('Zoo keeper', -1))

/**
 * ASCII CODE 解法
 * 大寫英文字母對應到ASCII TABLE的十進位代碼是65 ~ 90,
 * 小寫則是 97 - 122
**/

function CaesarCipher2(string, number) {
  number = number % 26;
  let newString = '';

  for(let i = 0; i < string.length; i++) {
    // 找出每個字母的charCodeAt
    let charCode = string.charCodeAt(i);
    let newCharCode;
    // shift位置
    // 檢查是否超過範圍65 ~ 90 或 97 - 122
    if (charCode >= 65 && charCode <= 90) {
      // 大寫字母
      newCharCode = charCode + number;
      if (newCharCode < 65) {
        newCharCode = newCharCode + 26;
      } else if (newCharCode > 90) {
        newCharCode = newCharCode - 26;
      }
    } else if(charCode >= 97 && charCode <= 122) {
      // 小寫字母
      newCharCode = charCode + number;
      if (newCharCode < 97) {
        newCharCode = newCharCode + 26;
      } else if (newCharCode > 122) {
        newCharCode = newCharCode - 26;
      }
    } else {
      // 不是字母，直接加入
      newCharCode = charCode
    }
    // 加入newString裡
    newString += String.fromCharCode(newCharCode)
  }
  return newString;
}

console.log(CaesarCipher2('Zoo keeper', 2))
console.log(CaesarCipher2('Zoo keeper', -1))
