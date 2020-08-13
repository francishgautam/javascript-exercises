function farmInventory(cows, sheep) {
  for (var i = 0; i < 3; i++) {
    cows = "0" + cows;
    sheep = "0" + sheep;
  }
  console.log(cows);
  console.log(sheep);
}
farmInventory(2, 3);
