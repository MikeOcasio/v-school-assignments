// Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work 
// (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

// John is the pet owner, and his name should be stored differently than the other names.


const name = "John";
let age = 101;

function runForLoop(pets) {
  let petObjects = [];
  for (var i = 0; i < pets.length; i++) {
    let pet = { type: pets[i] };
    let name;
    if (pets[i] === "cat") {
      name = "fluffy";
    } else {
      name = "spot";
    }
    console.log("pet name: ", name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log("man name: ", name);
  return petObjects;
}

runForLoop(["cat", "dog"]);


// Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.
const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
  return arr.map((carrot) => {
    return { type: "carrot", name: carrot };
  });
}

// Re-write this `.filter()` ’s callback function using an arrow function:

const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Bowser",
    friendly: false,
  },
];

function filterForFriendly(arr) {
  return arr.filter ((person) => person.friendly);
}

var doMathSum = (a, b) => a + b;




// Re-write the following functions to be arrow functions:

var produceProduct =  (a, b) => a * b;

// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

"Hi Kat Stark, how does it feel to be 40?";
// `firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`

var guest = {
  firstName: "Jane",
  lastName: "Doe",
  ageNum: 100
};

let printSring = (guest) => console.log(`Hi ${guest.firstName} ${guest.lastName}, how does it feel to be ${guest.ageNum}?`)

printSring(guest)



// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
let info = {
    name: "Janice",
    location: "Hawaii"
}
let welcomeString = (info) =>
  console.log(
    `Hi ${info.name}!\nWelcome to ${info.location}.\nI hope you enjoy your stay. Please ask the president of Hawaii if you need anything`
  );

  welcomeString(info)
