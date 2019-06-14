/**
 * 因爲執行了2個不相干的for loop，屬於Linear Time Complexity - O(n) + O(m)，
 * 可以寫成O(n + m)，或是一樣用O(n)表示。
**/

function harmlessRansomNote(note, magazine) {
  // 將輸入轉爲單字列
  var noteArray = note.split(' ');
  var magazineArray = magazine.split(' ');

  // 記錄每個magazine中的單字出現的次數
  var magazineObj = {};

  magazineArray.forEach(word => {
    if(!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  // 檢查note的單字在magazine中是否有足夠的數量
  var noteIsPossible = true;
  noteArray.forEach(word => {
    if(magazineObj[word]) {
      // 如果有，數量 - 1
      magazineObj[word]--;
      // 數量不夠, 設爲false
      if(magazineObj[word] < 0) noteIsPossible = false;
    } else {
      // 如果沒有, 設爲false
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
}

var noteText = 'this is a secret note for you from a secret admirer';
var magazineText = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited';

console.log(harmlessRansomNote(noteText, magazineText));
