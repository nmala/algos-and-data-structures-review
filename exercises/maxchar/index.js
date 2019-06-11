// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solutions

// 1.
// function maxChar(str) {
//   let tracker = {};
//   for (let char of str) {
//     // if (tracker[char]) {
//     //   tracker[char]++;
//     // } else {
//     //   tracker[char] = 1;
//     // }
//     tracker[char] ? tracker[char]++ : (tracker[char] = 1);
//   }

//   // couldn't solve on my own
//   // https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
//   return Object.keys(tracker).reduce((a, b) => {
//     return tracker[a] > tracker[b] ? a : b;
//   });
// }

/////////////////////////////////////////////

// stephen's solutions
// 1.
function maxChar(str) {
  const charMap = {};
  // set two helper vars to track obj key with highest val
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // logic below flipped from my version above
    // if (!charMap[char]) {
    //   charMap[char] = 1
    // } else {
    //   charMap[char]++
    // }

    // cleaner version of above
    // if adding one to itself results in null (b/c initially undefined),
    // it's falsey, so can use boolean to assign 1 otherwise
    charMap[char] = charMap[char] + 1 || 1;
  }

  // iterate through object and keep setting max and maxChar vars
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
