function frankenSplice(arr1, arr2, n) {
  let arr2Slice = arr2.slice(n);
  arr2.splice(n, arr1.length, ...arr1, ...arr2Slice);
  return arr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
