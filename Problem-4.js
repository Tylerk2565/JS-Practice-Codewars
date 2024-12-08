// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// With this I figured using methods is the easiest way, we start by spliting the string, reversing and then joining it together and setting it
// to lowercase
// We then check if this split, reversed, joined and lowercase string is equal to the orignal lowercased string
function isPalindrome(x) {
  return x = x.split('').reverse().join('').toLowerCase() == x.toLowerCase();
}
console.log(isPalindrome('racecar'));