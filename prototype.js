function person(name) {
  this.name = name;
}

var sam = new person("Sam");
var kriti = new person("kriti");

var sirName = person.prototype.sirName;

person.sirName = "sharma";
sam.sirName = "Kumar";
console.log(person.sirName);
console.log(sam.sirName);
console.log(kriti.sirName); // Undefined
console.log(Object.getPrototypeOf(person));

Array.prototype.test = "Testing";
console.log(test);
