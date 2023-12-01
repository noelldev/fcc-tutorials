function factorial(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  return factorial(arr);
}

console.log(factorial([1, 2, 3, 4, 5]));

function sum(arr, n) {
  // Only change code below this line
  if (n == 0) {
    return 0;
  }
  //n = 1  arr[0]   + 0
  //n = 2  arr[1]   + arr[0]  + 0
  //n = 3  arr[2]   + arr[1]  + arr[0]  + 0
  else return arr[n - 1] + sum(arr, n - 1);

  // Only change code above this line
}
