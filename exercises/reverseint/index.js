// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my solutions

// 1. using .toString() and parseInt()
// function reverseInt(n) {
//   const str = n.toString();
//   // can also use if (Math.sign(n) === -1)
//   if (n < 0) {
//     let reversed = str.split('').reverse();
//     // moving the neg sign to the front
//     reversed.unshift(reversed.pop());
//     return parseInt(reversed.join(''));
//   } else {
//     return parseInt(
//       str
//         .split('')
//         .reverse()
//         .join('')
//     );
//   }
// }

//////////////////////////////////////////////////////

// stephen's solutions

// 1. using .toString() and Math.sign()
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  // if (n < 0) {
  //   return parseInt(reversed) * Math.sign(n);
  // } else {
  //   return parseInt(reversed);
  // }

  // no need for conditional above b/c Math.sign(n) is
  // either 1 or -1, giving us the conditions of
  // n < 0 and n > 0
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
