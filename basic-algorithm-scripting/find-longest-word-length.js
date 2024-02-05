//Return the length of the longest word in the provided sentence.
function findLongestWordLength(str) {
  let splitted = str.split(' ');
  let longestword = '';
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length > longestword.length) {
      longestword = splitted[i];
    }
  }
  return longestword.length;
}
console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
