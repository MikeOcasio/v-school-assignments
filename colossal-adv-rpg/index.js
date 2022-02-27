var readlineSync = require("readline-sync");

var divdr =
  "--------------------------------------------------------------------"

class Player {
  constructor(player, hp, ap) {
    this.player = player;
    this.hp = hp;
    this.ap = ap;
    this.inventory = [];
    this.enemyKilled = 0;
  }
  //player is alive Function
  isAlive() {
    return this.hp > 0;
  }
  reduceHP(damage) {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }
}

const newPlayer = new Player(playerName, 400, 325);

class Inventory {
  constructor(item, hp) {
    this.item = item;
    this.hp = hp;
  }
}

class Enemies {
  constructor(enemy, hp, ap) {
    this.enemy = enemy;
    this.hp = hp;
    this.ap = hp;
  }
  isAlive() {
    return this.hp > 0;
  }
  reduceHP(damage) {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }
}

const goblin = new Enemies("Goblin", 80, 130);
const orc = new Enemies("Orc", 110, 160);
const harpy = new Enemies("Harpy", 150, 200);
const lesserKnight = new Enemies("Lesser Knight", 220, 270);
const greaterKnight = new Enemies("Greater Knight", 270, 325);
let enemies = [
  goblin,
  orc,
  harpy,
  lesserKnight,
  greaterKnight,
];



console.log("Welcome adventurer to Adventure RPG! ");

console.log(divdr);

var playerName = readlineSync.question("What is your name? ");
console.log(
  "Hey there, " +
    playerName +
    " the goal of the game is to get as far as you can and reach Camelot, the save haven."
);

console.log(divdr);

function operatorChoice() {
  var readLineSync = require("readline-sync");
    
  let operator = readLineSync.question(
    `Would you like to play? Enter "Y" or "N": `
  );
  switch (operator) {
    case "Y":
      console.log(divdr);
      console.log(
        "You awaken in the middle of a subtle field. The soon is high in the noon. As you look around you see some coming from the west."
      );

      return operator;
    case "y":
      console.log(divdr);
      console.log(
        "You awaken in the middle of a subtle field. The soon is high in the noon. As you look around you see some coming from the west."
      );

      return operator;
    case "N":
      console.log(divdr);
      console.log("Try the game sometime soon!");

      return operator;
    case "n":
      console.log(divdr);
      console.log("Try the game sometime soon!");

      return operator;
    default:
      console.log("You must input 'Y' or 'N' !");
  }
}
while (newPlayer.isAlive()) {
  const commands = readlineSync.keyIn(
    "[w]Walk\n[i]Inventory\n[u]Use Item\n[q]Quit Game\n",
    { limit: "wiuq" }
  );
  if (commands == "w") {
    walk();
  } else if (commands == "i") {
    showInventory();
  } else if (commands == "u") {
    useItem(sportDrink);
  } else if (commands == "q") {
    if (enemies.length > 0) {
      console.log("You quit without defeating all the enemies");
      process.end;
      break;
    }
  } else {
    console.log(
      "Thanks for your help, we knocked out all those delicious treats/ enemies!!"
    );
    break;
  }
}



operatorChoice();
