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
