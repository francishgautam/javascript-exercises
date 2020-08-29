//........................hasOwnProperty.................................

function particle(x, y) {
  this.x = x;
  this.y = y;
  this.show = function () {
    return this.x + this.y;
  };
}
var matter = new particle(100, 50);

console.log(matter.show());

var person = {
  name: "Francish",
  sirName: "Gautam",
  fun: () => {
    console.log("Swiper no swiping");
  },
};
console.log(person.hasOwnProperty("name"));

//..........................

console.log("hasOwnProperty" in person);

object = Object.create({});
object.Hello = "There";
console.log(object.Hello);
