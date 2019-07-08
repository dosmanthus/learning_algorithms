# 資料結構及演算法學習筆記

## 01 fizzBuzz
Q:
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

A:
[Answer](01_fizzBuzz.js)

ref: [leetcode 412. Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)

## 02 Harmless Ransom Note
Q:
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

A:
[Answer](02_harmlessRansomNote.js)

ref: [leetcode 383. Ransom Note](https://leetcode.com/problems/ransom-note/)

## 03 Is Palindrome
Q:
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
```
Input: "A man, a plan, a canal: Panama"
Output: true
```

Example 2:
```
Input: "race a car"
Output: false
```

A:
[Answer](03_isPalindrome.js)

ref: [leetcode 125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## 04 Caesar Cipher
Q:
We have a string of lowercase letters, and an integer number.
Each letter in the string is 'shifted' a certain number of places down the alphabet.

Example 1:
```
Input: string = 'Zoo keeper', shift = 2
Output: 'Bqq mggrgt'
```

Example 2:
```
Input: string = 'Zoo keeper', shift = -1
Output: 'Ynn jddodq'
```

A:
[Answer](04_caesarCipher.js)

[ASCII Code 解法參考](https://pjchender.blogspot.com/2017/09/caesar-cipher.html)

ref: [leetcode 848. Shifting Letters](https://leetcode.com/problems/shifting-letters/)

## 05 Reverse Words
Q:
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

Note: In the string, each word is separated by single space and there will not be any extra space in the string.

A:
[Answer](05_reverseWords.js)

ref: [557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

## 06 Reverse Array in Place
Q:
- Be sure to manipulate the array passed in
- Do NOT push elements into a new array and return that array
- Do not use array.reverse() method

A:
[Answer](06_reverseArrayInPlace.js)

## 07 Mean Median Mode
Q:
return mean, median and mode value of an array, as an object has 3 properties on it.

Example:
```
{
  mean: 'the_mean_val',
  median: 'the_median_val',
  mode: 'the_mode_val(s)'
}
```

A:
[Answer](07_meanMedianMode.js)

## 08 Two Sum
Q:
Returns every pair of numbers from array, that adds up to the sum.
- Result should be an array of arrays
- Any number in the numArray can be used in multiple pairs
- Should be done in O(n) time complexity

Example 1:
```
numArray = [1, 6, 4, 5, 3, 3],
sum = 7

result = [[6, 1], [3, 4],[3, 4]]
```

A:
[Answer](08_twoSum.js)

ref: [leetcode 1. Two Sum](https://leetcode.com/problems/two-sum/)

## 09 Binary Search
Q:
- Search for a given value(key) inside of an ascending order sorted list(numArray)
- Runs in O(log n) run time - very performant
- Can be written as a resursive function

A:
[Answer](09_binarySearch.js)

ref: [leetcode 704. Binary Search](https://leetcode.com/problems/binary-search/)

## 10 Fibonacci
Q:
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

Example 1:
```
Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
```

Example 2:
```
Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
```

Example 3:
```
Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

A:
[Answer](10_fibonacci.js)

## 11 Memoized Fibonacci
Q:
[10 fabonacci](10_fabonacci.js)的Runtime是O(2^n)，需要重複計算前1, 2位的數值，也就是說當 position 輸入的數值越大時，運算的時間會呈指數(爆炸性的)成長。可以搭配Memoization提高效能，runtime會是O(n),因爲計算過的數值都被cache住了，只需計算一次。

- Check to see if number already exists in cache
- If number is in cache, use that number
- If number is not in cache, calculate tin and put it in cache so it can be used multiple times in future

A:
[Answer](11_memoizedFibonacci.js)

ref: [leetcode 509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

## 12 Sieve of Eratosthenes
埃拉托斯特尼篩法（希臘語：κόσκινον Ἐρατοσθένους，英語：sieve of Eratosthenes ），簡稱埃氏篩，也稱質數篩。
Q:
Count the number of prime numbers less than a non-negative number, n.

Example:
```
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

A:
[Answer](12_sieveOfEratosthenes.js)

ref: [leetcode 204. Count Primes](https://leetcode.com/problems/count-primes/)


## 13 Bubble Sort
Q:
Bubble sort 的方式是將陣列兩兩相鄰的元素互相比較，大的移到後面。例如有6個元素的陣列，重複5次(Array.length - 1)這個動作之後，最大的數會像氣泡一樣跑到最右邊。然後，再進行第2輪排序，這次只需排序到5個元素(index 0~4)，以此類推...直到整列完全排序完。

A:
[Answer](13_bubbleSort.js)

## 14 Merge Sort
Q:
Merge sort的方式是將整列對半拆分，然後再加以合併。合併的方式是以取2個整列的第一個元素進行比較，小的放前面。

A:
[Answer](14_mergeSort.js)

## 15 Max Stock Profit
Q:
Build a function it takes in array of proces as parameter, returns the max possible profit of the day.

Notes:
- If no profit is possible, return -1
- A max profit of 0 is treated as any other max profit value.

A:
[Answer](15_maxStockProfit.js)


ref: [leetcode 121 Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)


來源:
- [Learning algorithms in javascript from scratch](https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/)
