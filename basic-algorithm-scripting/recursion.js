function numberOfItems(arr, item) {
  // Write the code that goes here
  let count = 0;
  function checkIfArr(el) {
    for (let i = 0; i < el.length; i++) {
      if (Array.isArray(el[i])) {
        checkIfArr(el[i]);
      } else if (el[i] === item) {
        count++;
      }
    }
  }

  checkIfArr(arr);
  return count;
}

let arr = [25, ['apple', 25], ['banana', 'strawberry', 'apple', 25]];

console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, 'apple'));

function factorial(n) {
  //n = 5
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log('factorial', factorial(5));

function sum(arr, n) {
  //arr [1,2,3,4,5], n = 5
  if (n === 0) {
    return 0;
  }
  //n = 1  arr[0]   + 0
  //n = 2  arr[1]   + arr[0]  + 0
  //n = 3  arr[2]   + arr[1]  + arr[0]  + 0
  return arr[n - 1] + sum(arr, n - 1);
}

console.log('sum', sum([1, 2, 3, 4, 5], 5));
