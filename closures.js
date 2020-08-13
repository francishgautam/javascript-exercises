function wrapValue(n) {
  localVariable = n;
  return function () {
    return localVariable;
  };
}
value1 = wrapValue(1);
value2 = wrapValue(2);

console.log(value1());
console.log(value2());
//..............
function factor(f) {
  return function (n) {
    console.log(n * f);
  };
}

first = factor(2);
first(10);
