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

- Be sure to manipulate the array passed in
- Do NOT push elements into a new array and return that array
- Do not use array.reverse() method

A:
[Answer](06_reverseArrayInPlace.js)


ref:
- [Learning algorithms in javascript from scratch](https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/)
