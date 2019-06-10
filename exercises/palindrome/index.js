// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my solutions
// 1. not using .reverse() on purpose
// function palindrome(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed === str;
// }

// 2. not using .reverse() on purpose
// function palindrome(str) {
//   let reversed = str.split('').reduce((rev, char) => char + rev, '');
//   return reversed === str;
// }

////////////////////////////////////////////////////////////////////////

// stephen's solutions

// 1. using .reverse()
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//   return str === reversed;
// }

// 2. using Array.prototype.every()
// not an ideal solution, but it's one way of doing it and good conversation
// piece for interviews b/c can bring up it's not ideal nature and offer //
// better solution
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]; // -1 to account for 0 indexing
  });
}

module.exports = palindrome;
