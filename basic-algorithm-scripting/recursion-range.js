function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    //    rangeOfNumbers(4, 8){
    //          rangeOfNumbers(4, 7){
    //             rangeOfNumbers(4, 6){
    //                rangeOfNumbers(4, 5){
    //                        rangeOfNumbers(4, 4){
    //                              return [4]
    //                        }
    //                 }
    //             }
    //          }
    //     }
    arr.push(endNum);
    console.log(arr);
    return arr;
  }
}

console.log(rangeOfNumbers(4, 9));
