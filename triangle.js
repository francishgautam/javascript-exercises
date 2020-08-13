var arr = "#";
for (let i = 0; i < 5; i++) {
  console.log(arr);
  arr = arr + "#";
}

// Book solution

for (let line = "#"; line.length < 8; line += "#") console.log(line);
