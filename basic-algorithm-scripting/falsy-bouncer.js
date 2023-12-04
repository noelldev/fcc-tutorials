// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  //.filter will return all the elements that will satisfy the condition in the cb function in this case truthy codition
  let result = arr.filter((el) => el);
  return result;
}

bouncer([7, 'ate', '', false, 9]);
