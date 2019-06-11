// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// use character maps
// remove spaces and punctuation with regex \w,
// which only matches alphanumerics, and then chain .toLowerCase()
// string.replace(/[^\w]/g, '').toLowerCase()

// my attempt

// function anagrams(stringA, stringB) {
// let strA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   let strB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   let charMapA = {};
//   let charMapB = {};

//   for (const char of strA) {
//     if (charMapA[char]) {
//       charMapA[char]++;
//     } else {
//       charMapA[char] = 1;
//     }
//   }

//   for (const char of strB) {
//     if (charMapB[char]) {
//       charMapB[char]++;
//     } else {
//       charMapB[char] = 1;
//     }
//   }
//   console.log(strA.length, strB.length);

//   if (strA.length === strB.length) {
//     for (const map in charMapA) {
//       if (charMapA[map] === charMapB[map]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     false;
//   }
// }

// stephen's solutions

// 1.
// write a helper fn to make a char map for each string instead of
// writing 2 for loops

// beware of edge case when comparing a shorter char map to a longer one,
// b/c will be true if matches longer one, but longer map has additional
// letters. check if # of keys the same between both char map objects.

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   // if character maps are different lenghts, then obviously can't be anagram
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (const char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }
//   // stephen accounts for all the falses, and then
//   // returns true in main fn scope if all other falses don't hit
//   // my solution from above accounts for all true's, and returns
//   // false otherwise

// // helper function
// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// 2
// more straightforward, but runs into performance concerns
// uses .sort() on both strings after spaces and punctuation removed
// if sorted strings identical, then anagram
// no need to compare char by char

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// helper fn to produce clean, sorted string
function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;
