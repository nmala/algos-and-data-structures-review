// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// my attempt
// it works!

// function fib(n) {
//   let nums = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     let nextNum = nums[i - 1] + nums[i - 2];
//     nums.push(nextNum);
//   }

//   return nums[n];
// }

// stephen's solutions
// 1. iterative

// O(n) -> linear runtime, only 1 for loop
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }

//   return result[n];
// }

// 2. recursive
// time complexity: exponential runtime, O(2^n)
// for every increase in 'n', there's a dramatic increase in function calls
// function fib(n) {
//   // base case
//   if (n < 2) {
//     return n;
//   }

//   // keep calling fib(n) until we meet base case
//   // and then add all base case returns
//   return fib(n - 1) + fib(n - 2);
// }

// MEMOIZATION

function memoize(fn) {
  const cache = {};

  // return faster, memoized fn
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  // if using memoization, make sure that these recursive calls
  // are of the memoized fn, not the slowFib fn.
  return fib(n - 1) + fib(n - 2);
}

// now when fib is called, it's called using the returned fn inside memoize()
const fib = memoize(slowFib);

module.exports = fib;
