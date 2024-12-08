// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...


// For this I decided to go with the method approach
// I start off with the filter method that filters out names that have more than 4 letters in it.
// I did this by using name.length === 4
// That way it returns only names with more than 4 letters
function friend(friends){
  return friends.filter(name => name.length === 4)
}