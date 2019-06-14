/**
 * 判斷字串是不是迴文，也就是順著寫和逆著寫都是一樣的。
 **/

function isPalindrome(string) {
  // 轉換成lowercase
  string = string.toLowerCase();
  // 轉成array
  var charactersArray = string.split('');

  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersOnlyArray = [];
  charactersArray.forEach(char => {
    // 只收集符合validCharacters的文字到lettersOnlyArray
    if(validCharacters.indexOf(char) > -1) {
      lettersOnlyArray.push(char);
    }
  })

  return lettersOnlyArray.join('') === lettersOnlyArray.reverse().join('');
}

/**
 * 寫法2
**/

function isPalindrome2(string) {
  let characterArray = string.toLowerCase().split('').filter(char => /[a-z]/.test(char));
  return characterArray.join('') === characterArray.reverse().join('');
}

console.log(isPalindrome2("Madam, I'm Adam"));
