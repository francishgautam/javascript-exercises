var number = -80;
function onEven(n) {
  if (n == 0) {
    console.log("True");
  } else if (n == 1) {
    console.log("False");
  } else if (n < 0) {
    onEven(-n);
  } else {
    onEven(n - 2);
  }
}
onEven(number);
