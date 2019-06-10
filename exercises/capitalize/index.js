// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// my attempt
// function capitalize(str) {
//   let sentence = str.split(' ');

//   // can make a new array to hold capitalized words,
//   // or can rewrite the elements of the original array split from string input,
//   // by using array[array.indexOf(el)] = word[0].toUpperCase() + word.slice(1)

//   // let capitalizedStr = [];

//   for (let word of sentence) {
//     sentence[sentence.indexOf(word)] = word[0].toUpperCase() + word.slice(1);
//     // capitalizedStr.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return sentence.join(' ');
// }

// stephen's solutions

// 1. more direct solution

// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

// 2. easier to picture, harder to code

// s

function capitalize(str) {
  // check if char to the left of current char is a space, and if so
  // capitalize it and add to new string. Issue with the first char though
  // b/c there is no space to the left of it and it will always have to be manually
  // set as capital when declaring new string, see 'result' below for ex.
  let result = str[0].toUpperCase();

  // loop starts at 1 b/c we manually hardcode the first char (index 0) to be cap in 'result'
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
