// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop,
// and access each member with array syntax arr[i].
//largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
//should return [27, 5, 39, 1001].

function getHighest(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest;
}

function largestOfFour(arr) {
  //traverse the given array
  //then each array traverse as well
  //then identify which is highest then push it to new array then get to the next array
  // create a function that will determin the greatest element in an array then return the result
  let arrHighest = [];
  for (let i = 0; i < arr.length; i++) {
    let highest = getHighest(arr[i]);
    arrHighest.push(highest);
  }
  return arrHighest;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

// console.log(getHighest([13, 27, 100, 26]));
