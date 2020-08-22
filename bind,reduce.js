const c1 = {
  x: 100,
  y: 40,
};
const c2 = {
  x: 10,
  y: 4,
};

function checkBind() {
  console.log(this.x + this.y);
}

c1Bind = checkBind.bind(c1);
c2Bind = checkBind.bind(c2);

c1Bind();
c2Bind();
