var arr = [1, 2, 3, 4];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  });
}
