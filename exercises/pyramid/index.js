// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1. iterative solution

// function pyramid(n) {
//   // calc midpoint of row, which changes depending on 'n'
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';

//     // number of columns !== n like in steps example
//     // 2 x number of rows - 1 = number of columns
//     for (let column = 0; column < 2 * n - 1; column++) {
//       // check to the left and right of midpoint by 'row' number of elements
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// 2. recursive solution

function pyramid(n, row = 0, level = '') {
  if (n === row) {
    return;
  }

  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
module.exports = pyramid;
