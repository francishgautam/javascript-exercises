var obj = { name: "francish" };

function calling(arg) {
  return this.name + arg;
}

console.log(calling.call(obj, " Gautam"));

//..........................
var array = [1, 2, 3];

function applying(...arg) {
  return this + "," + arg;
}
var anotherArr = [4, 5, 6];
console.log(applying.apply(array, anotherArr));

//...........................

function binding(arg) {
  return this.name + arg;
}

var newFunction = binding.bind(obj);
console.log(newFunction("bacon"));
