// Write a function that splits an array (first argument) into groups the length of
// size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//   let mainArr = [];
//   let newArray = arr.slice();
//   for (let i = 0; i < arr.length; i++) {
//     if (newArray.length) {
//       mainArr.push(newArray.splice(0, size));
//     }
//   }

//   return mainArr;
// // }
function chunkArrayInGroups(arr, size) {
  let resultArray = [];

  while (arr.length) {
    resultArray.push(arr.splice(0, size));
  }

  return resultArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
