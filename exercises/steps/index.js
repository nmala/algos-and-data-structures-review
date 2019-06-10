// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// stephen's solutions

// 1. iterative solution, two for loops, one for rows and columns (matrix of sorts )
// if current column <= current row, add '#', else add space
// this is a goto in interview setting, unless a recursive solution is asked for

// function steps(n) {
//   // i = row, j = column
//   for (let i = 0; i < n; i++) {
//     let step = '';
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }

// 2. recursive solution, therefore trickier. Use if recursive solution asked for,
// the iterative solution is more straightforward

function steps(n, row = 0, stair = '') {
  // first, define base case. but row is not defined anywhere, so we add an arg 'row' and assign it a default.
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;
