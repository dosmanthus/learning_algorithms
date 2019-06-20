/**
 * 此寫法的複雜度爲O(2^n)
 **/

function fibonacci(position) {
  if (position < 3) return 1
  else {
    return fibonacci(position - 1) + fibonacci(position - 2)
  }
}

console.log(fibonacci(20))
