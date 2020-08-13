// Reverse an array
// arr.reverse()

function reverseArray(arr) {
  var newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}
var array = [1, 2, 3];

reverseArray(array);
