function c() {}
function d() {}

const e = new c();

console.log(e instanceof c);
console.log(e instanceof d);

//....................
function person(name, age) {
  this.name = name;
  this.age = age;
}

const ram = new person("Ram", 20);
console.log(ram instanceof person);
console.log(ram instanceof Object);
