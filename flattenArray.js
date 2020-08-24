var array = [
  [1, 2, 3],
  [4, 5],
  [6, 7],
];

var newArray = array.reduce((acc, val) => {
  return acc.concat(val);
});

console.log(newArray);
