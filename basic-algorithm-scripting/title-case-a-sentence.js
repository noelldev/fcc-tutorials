// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  return str
    .split(' ')
    .map((w) => {
      return capWord(w);
    })
    .join(' ');
}

function capWord(str) {
  let word = str.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(titleCase('sHoRt AnD sToUt'));
