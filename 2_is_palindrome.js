/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  // your code here...
  let reverse = [];
  let combinedSentence = sentence.split(' ').join('');
  for (let i = 0; i < combinedSentence.length; i ++) {
    reverse.unshift(combinedSentence[i])
  }
  return reverse.join('') === combinedSentence
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
