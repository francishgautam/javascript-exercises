// Function inside another function i.e closures
//Function creating functions

function sevenMultiplier(a) {
  return function (b) {
    return console.log(a * b);
  };
}
withSeven = sevenMultiplier(7);
withSeven(2);

// Functions that change other functions
