var officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer",
];

for (i = 0; i <= officeItems.length; i++){

    if (officeItems[i] === "computer"){
        console.log(officeItems[i])
    }

};

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];

let minAge = 18;

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < minAge) {
    console.log(
      peopleWhoWantToSeeMadMaxFuryRoad[i].name +
        ":" +
        " Mad max is to much for your untainted eyes!"
    );
  } else
    console.log(
      peopleWhoWantToSeeMadMaxFuryRoad[i].name +
        ":" +
        " You're old enough.. Do as you please!"
    );
  console.log(
    peopleWhoWantToSeeMadMaxFuryRoad[i].name +
      "'s gender is " +
      peopleWhoWantToSeeMadMaxFuryRoad[i].gender +
      " & " +
      peopleWhoWantToSeeMadMaxFuryRoad[i].name +
      "'s age is " +
      peopleWhoWantToSeeMadMaxFuryRoad[i].age
  );

}
