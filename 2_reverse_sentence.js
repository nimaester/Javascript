/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  // your code here...
  let result = [];
  let words = sentence.split(' ')
  words.forEach(word => result.unshift(word));
  return result.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
