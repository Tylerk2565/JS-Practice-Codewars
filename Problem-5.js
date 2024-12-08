// Write a function to split a string and convert it into an array of words.

// With this we used the split method which splits each word of our string by a coma, since we have a space between the two quotes (" ")
// This problem was fairly easy, considering we just had to use the split method.
function stringToArray(string){
  return string.split(" ");
}

console.log(stringToArray('Robin Singh'));
console.log(stringToArray('I love arrays they are my favorite'));