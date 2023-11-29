// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//Return the truncated string with a ... ending.
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  let truncated = str.split('').slice(0, num).join('') + '...';
  return truncated;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length
);
