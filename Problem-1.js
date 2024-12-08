// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


// Convert a string to a number
// Converting a string to a number is important for when you want to do calculations
// This one was easy for me, I'm familar with parseInt since I had to use it with my budget tracker

const stringToNumber = function(str) {
  return parseInt(str);
}
console.log(stringToNumber('1234'));