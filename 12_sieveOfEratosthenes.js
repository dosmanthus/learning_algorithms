/**
 * 質數(Prime): 一個大於 1 的整數，除了 1 和數本身以外，沒有其他的因數。
 * 合數(Composite): 質數以外都是合數。
 *
 * 假如一個數N是合數，它有一個因數a,a×b=N
 * 則a、b兩個數中必有一個大於或等於根號N，一個小於或等於根號N。
 * 因此，只要小於或等於根號N的數（1除外）不能整除N，則N一定是質數。
 **/

function sieveOfEratosthenes(num) {
  var primes = [];
  for(var i = 0; i <= num; i++) {
    if(i < 2) primes[i] = false; // 0, 1不是質數
    else primes[i] = true;
  }

  // 檢查小於或等於√Num的數能不能整除Num
  for(var i = 2; i <= Math.sqrt(num); i++) {
    // 把所有i的倍數都標為非質數
    for(var j = 2; j * 1 <= num; j++) {
      primes[i * j] = false;
    }
  }

  var result = [];
  for(var i = 0; i < primes.length; i++) {
    // 將還是標示爲true的index數字加到result
    if(primes[i]) result.push(i)
  }

  return result;
}

console.log(sieveOfEratosthenes(20))
