var arr = [];
for (i = 0; i < 101; i++) {
  arr.push(i);

  if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
    arr[i] = "fuzz";
  }
}
console.log(arr);
