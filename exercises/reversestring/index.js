// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// my solution

// function reverse(str) {
//   const splitStr = str.split('');
//   let reverseStr = [];
//   for (let char of splitStr) {
//     reverseStr.unshift(char);
//   }
//   return reverseStr.join('');
// }

//////////////////////////////////////////////////////////

// 1.
// stephen's solution with Array.prototype.reverse() fn
// function reverse(str) {
//   // const arr = str.split('');
//   // arr.reverse();
//   // return arr.join('');

//   // cleaner code
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// 2.
// stephen's solution without Array.prototype.reverse() fn
function reverse(str) {
  // create 'reversed' empty string, for each character in str add it
  // to the start of 'reversed', return 'reversed'

  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

// 3.
// stephen's solution with reduce()
// function reverse(str) {
//   // split str to array and then use reduce

//   // reduce iterates through each array element and condenses to single value
//   // reduce takes 2 args
//   // callback and initial value, '' in this case
//   // reduce takes initial value, passes into callback as 1st arg, and
//   // callback return becomes inital value for next iteration
//   // callback's 2nd arg is current element going thru iteration
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }

module.exports = reverse;
