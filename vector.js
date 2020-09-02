class vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(a, b) {
    console.log(this.x + a, this.y + b);
  }
  minus(c, d) {
    console.log(this.x + c, this.y + d);
  }
  get length() {
    console.log(Math.sqrt(this.x * this.x + this.y * this.y));
  }
}

const line = new vector(1, 2);
line.plus(2, 3);
line.length;
