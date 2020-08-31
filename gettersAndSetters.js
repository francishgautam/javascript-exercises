const obj = {
  name: "Francis",
  type: "Dazu",
  get printData() {
    console.log(this.name + this.type);
  },
  set printData(value) {
    const parts = value.split(" ");
    this.name = parts[0];
    this.type = parts[1];
  },
};

obj.printData = "Kafle Killer";
obj.printData;
