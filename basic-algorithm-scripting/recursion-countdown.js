function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
    //closure will be form in countdown() and will pile in call stack
    //its like function within function like below:
    // function countdown(){
    //    n = 5
    //      countdown(){
    //          n = 4
    //            countdown(){
    //                n = 3
    //                  countdown(){
    //                      n = 2
    //                        countdown(){
    //                            n = 1
    //                              countdown(){
    //                                  n = 0
    //                                  it will return [], then it will be deduce and n in each execution context will be push
    //                                  to the array while stack is being pop in callstack
    //                   }
    //                 }
    //               }
    //             }
    //           }
    // }
  }
}

console.log(countdown(5));
