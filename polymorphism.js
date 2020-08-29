class domestic {
  constructor(name) {
    this.name = name;
  }
  getSound() {
    console.log(`${this.name} has a modest sound`);
  }
}
class wild extends domestic {
  constructor(name) {
    super(name);
  }
  getSound() {
    super.getSound();
    console.log(`${this.name} has harsh sound`);
  }
}
const cow = new domestic("cow");
cow.getSound();

const tiger = new wild("Tiger");
tiger.getSound();
