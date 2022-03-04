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

/* Create an array that mimics a grid like the following using nested for loops:
[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]
2.Create an array that mimics a grid like the following using nested for loops:
[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]
3.Create an array that mimics a grid like the following using nested for loops:
[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
Given a grid like the previous ones, write a nested for loop that would change every number to an x.
var grid = [["x", ...], 
            ["x", ...], 
            ["x",...], ...]  */

// let arrayOfArrays = [];
// for (let s = 0; s <= 0; s++) {
//     let array1 = [];
//     for (let t = 0; t <= 0; t++) {
//         array1.push(t)
//     }
//     arrayOfArrays.push(array1)
//     console.log(arrayOfArrays)
// }


