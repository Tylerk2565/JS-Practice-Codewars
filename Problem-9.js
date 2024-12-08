// Complete the solution so that it reverses the string passed into it.


// For this we use split to split the string first, we then reservse it and then we join the strings togther that we had split
// I was confused on how to do this at first but I just remember the methods that I can add together to get the result.
function solution(str){
  return str.split("").reverse().join("");
}