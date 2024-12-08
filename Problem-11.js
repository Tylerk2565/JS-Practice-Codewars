// Abbreviate a Two Word Name


// First we need to split the name into two words
// then we take the first char of each word and capitalize them
// then we join them together with a .

function abbrevName(name) {
  [first, last] = name.toUpperCase().split(' ');
  return first[0] + '.' + last[0];
}
console.log(abbrevName('Tyler Krug'));