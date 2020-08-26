for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log("\n");

//........................
function whileOnly() {
  var i = 0;
  while (i < 3) {
    console.log(i);
    i++;
  }
  console.log("\n");
}
whileOnly();

//........................
function doWhile() {
  var i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 3);
}
doWhile();
console.log("\n");

//.........................forEach................................
array = [1, 2, 3, 4, 5];

var newArray = [];
array.forEach((element) => {
  newArray.push(element * 2);
});
console.log(newArray);

//..........................for in..................................
//Returns the keys of objects
//Returns the index of array
//No order and not suitable for arrays
//Loops over enumerable properties of objects

var array = [5, 4, 3, 2];
var object = { name: "Francish", sirName: "Gautam", symbol: "$" };
for (var i in array) {
  console.log(i);
}
for (var i in object) {
  console.log(i);
}

//..........................for of.....................................
//Object is not iterable
//Gives the values of the array and not the index

for (var i of array) {
  console.log(i);
}
