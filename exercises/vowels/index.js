// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// my solution
// figured it out!!

// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let tracker = 0;

//   for (let char of str) {
//     if (vowels.includes(char.toLowerCase())) {
//       tracker++;
//     }
//   }

//   return tracker;
// }

// stephen's solutions

// 1. iterative

// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     // can use .includes() on array and string
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// 2. regex

function vowels(str) {
  // using [] within regex // tells match to check all chars in []
  // /g for regex means don't stop after first match, keep going
  // /i for case insensitive
  // .match returns an array of matches or null if nothing matches
  const matches = str.match(/[aeiou]/gi);

  // have to consider case if no matches are made, which returns 'null',
  // so if false, return 0
  return matches ? matches.length : 0;
}

module.exports = vowels;
