console.log("------------Preliminaries: \n ______________1._____________  \n");

for (i = 0; i <= 9; i++) {
  console.log(i);
}

console.log("____________ 2. _____________");

for (i = 9; i >= 0; i--) {
  console.log(i);
}

console.log("____________ 3. _____________");

const fruit = ["banana", "orange", "apple", "kiwi"];

for (i = 0; i <= fruit.length; i++) {
  console.log(fruit[i]);
}

console.log("------------Bronze: \n ______________1._____________  \n");

const nums = [];

for (i = 0; i <= 9; i++) {
  nums.push(i);
  console.log(nums);
}

console.log("____________ 2. _____________");

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("____________ 3. _____________");

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

function everyOther(fruits) {
  var tempArry = [];

  for (i = 1; i <= fruits.length; i += 2) {
    tempArry.push(fruits[i]);
  }

  return tempArry.join(", ");
}

console.log(everyOther(fruits));

console.log("------------Silver: \n ______________1._____________  \n");

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

for (i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}

console.log("____________ 2. _____________");

function nmeAndOccptn(peopleArray) {
  var nameArr = [];
  var occupationArr = [];
  for (let i = 0; i < peopleArray.length; i++) {
    nameArr.push(peopleArray[i].name);
    occupationArr.push(peopleArray[i].occupation);
  }

  return nameArr.join(", "), occupationArr.join(", ");
}

console.log(nmeAndOccptn(peopleArray));

console.log("____________ 3. _____________");

let everyOtherName = [];
let everyOtherOccupation = [];
for (let i = 0; i < peopleArray.length; i++) {
  if (i % 2 == 0) {
    everyOtherName.push(peopleArray[i].name);
    console.log(everyOtherName);
  }
}
for (let i = 0; i < peopleArray.length; i++) {
  if (i % 2 == 0) {
    everyOtherOccupation.push(peopleArray[i].occupation);
    console.log(everyOtherOccupation);
  }
}
