function randomRange(myMin, myMax) {
  //condition
  //>=min && <=max
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  //in JS addition and subtraction has equal precedence so left-to-right rule follows
}

console.log(randomRange(5, 5));
