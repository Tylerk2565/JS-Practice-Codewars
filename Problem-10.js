// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.


//we first make an if statement to check if name strictly equals the owners name
// if it does, we return 'hello boss' 
// if it doesn't, we return 'hello guest'

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}