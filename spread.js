var obj1 = [
  { name: "francish", occupation: "professional" },
  { name: "Kafle", occupation: "developer" },
];

var obj2 = [
  { name: "Ujjwal", occupation: "Er" },
  { name: "Utsav", occupation: "Baba" },
];

console.log(...obj1, ...obj2);

//................

function newObj(newPerson) {
  return [
    ...obj1,
    { ...newPerson, cp: "Chahal pahal" },
    { name: "Sulav", occupation: "HM" },
  ];
}

const newArray = newObj(
  { name: "Ujjwal", occupation: "Er" },
  { name: "roshan", occupation: "CEO" }
);

console.log(newArray);

//................. Rest

function multiply(multiplier, ...numbers) {
  let result = numbers.forEach((element) => {
    multiplier * element;
  });
  console.log(result);
}
multiply(2, 1, 3, 4);
