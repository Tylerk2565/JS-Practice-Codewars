// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// This one was simple since we had been introduced to it a few times already
// We start with the evenOrOdd function with number as the argument, we then have an if statement that takes the number % 2 and if that equals 0,
// then it will be even, otherwise it will be odd

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  }
    return 'Odd';
}
console.log(evenOrOdd(6));