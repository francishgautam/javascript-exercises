var arr = [];
var sum = 0;
function range(a, b, c) {
  if (c < 0) {
    for (let i = a; i >= b; i += c) {
      arr.push(i);
      sum += i;
    }
  } else {
    for (let i = a; i <= b; i += c) {
      arr.push(i);
      sum += i;
    }
  }
  console.log(arr);
  console.log(`The sum is ${sum}`);
}
range(5, 2, -1);
