const countChar = (name, char) => {
  var b = 0;
  for (var i = 0; i < name.length; i++) {
    if (name.charAt(i) == char) {
      b = b + 1;
    } else b = b + 0;
  }
  console.log(b);
};
countChar("barbeque", "e");
