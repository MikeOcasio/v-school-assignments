var readLineSync = require("readline-sync");
var isGamerunning = true;
var key = 0;

var user = readLineSync.question("Hello, what is your name? ");
console.log(
  `Hey there, ${user} welcome to Escape Room. Your job is to escape the room!`
);

while (isGamerunning) {
  game();
}

function game() {
  let choice = readLineSync.question(
    "You awaken in a room. Confused and wondering how to get out. You see a door.. What will you do?\n 1)Find the key \n 2)Open the door \n 3)Put hand in the hole \n Choice: "
  );

  switch (choice) {
    case "1":
      if ((key === 0)) {
        console.log("You found the key.");
        key = 1;
      } else {
        console.log("You already have the key.");
      }
      break;
    case "2":
      if ((key === 0)) {
        console.log("It's locked.");
      } else if ((key === 1)) {
        victory();
      }
      break;
    case "3":
        defeat();

    break;
    default:
        console.log("Please enter '1', '2', or '3' \n Choice: ")
  }
}

  function victory() {
    let repeat = readLineSync.question("Congratulations! \n You've made it out of the Escape Room! \n Play again? \n 1) Yes \n 2) No");
    switch (repeat) {
        case "1":
            game();
            break;
        case "2":
            console.log("Goodbye!");
            isGamerunning = false;
            break;
        default:
            console.log("Please enter either '1' or '2'");
            victory();
            break;
    }
  }

    function defeat() {
    let repeat = readLineSync.question("Game Over \n You died! \n Play again? \n 1) Yes \n 2) No");
    switch (repeat) {
        case "1":
            game();
            break;
        case "2":
            console.log("Goodbye!");
            isGamerunning = false;
            break;
        default:
            console.log("Please enter either '1' or '2'");
            defeat();
            break;
    }
  }

