// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// my solution
// coudn't think of solution on my own, but following is my attempt after
// seeing stephen's high level diagram explanation of the algorithm, before
// seeing any of his code

// the following solution worked after 1st attempt! and it's the same
// as stephen's solution.

// function chunk(array, size) {
//   let chunks = [];
//   for (const el of array) {
//     const last = chunks[chunks.length - 1]; // last element is a subarray
//     if (!last || last.length === size) {
//       chunks.push([el]);
//     } else {
//       last.push(el);
//     }
//   }

//   return chunks;
// }

////////////////////////////////////////////

// stephen's solutions

// 1.
// create empty array to hold chunks 'chunks'
// for each element in the passed in arr,
// retrieve the last element in 'chunks' -> this will be a subarray
// if that last element does not exist or its length === chunk size,
// push new chunk into 'chunks' arr with current loop element inside,
// else add current element to existing last element subarray chunk

// function chunk(array, size) {
//   const chunked = [];

//   for (const element of array) {
//     const last = chunked[chunked.length - 1]: // last index of chunked is a subarray

//     if (!last || last.length === size) { // if no subarray or it's size === target size
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

// 2. more challenging to arrive at on your own, but simpler to put together
// using .slice() and while loop

// Create empty 'chunked' array
// Create var 'index' set to 0
// While index is less < array.length,
// Push a slice of length 'size' from 'array' into 'chunked',
// and add 'size' to 'index'

function chunk(array, size) {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
