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
    " the goal of the game is to kill all the monsters and you reach the town."
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

function walk() {
    const odds = Math.random();
    if (odds > .5) {
        console.log('You move closer mto the town.. no monsters are around.');
    } else {
        enemyEncounter()
    }
}

function enemyEncounter() {
  if (enemies.length == 0) {
    console.log(
      "You did it! You eliminated all the monsters....killing a total of " +
        newPlayer.playerName +
        newPlayer.enemyKilled
    );
    let end = readlineSync.keyIn("[q] for quit", { limit: "q" });
    if (end === "q") {
      process.end;
    }
  } else {
    let newEncounter = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(
      "*DANGER* Its " +
        newEncounter.enemy +
        " you unsheath you sword and crack your neck, its fight time"
    );
    console.log(newEncounter);
    firstFight(newEncounter);
  }
}
function firstFight(newEncounter) {
  while (newPlayer.isAlive() && newEncounter.isAlive()) {
    const fightOptions = readlineSync.keyIn(
      "[r]Run Away\n[e] Attack\n[u]SportsDrink\n[q]Quit the game",
      { limit: "reuq" }
    );

    const chanceOfEscape = Math.random();
    if (fightOptions === "r") {
      if (chanceOfEscape > 0.5) {
        console.log(
          "The monster throws a snare field, you cant escape.  Check Inventory"
        );
        return;
      } else {
        enemyAttack(newEncounter);
      }
    } else if (fightOptions === "e") {
      playerAttack(newEncounter);
      enemyAttack(newEncounter);
    } else if (fightOptions === "u") {
      useItem();
    } else if (fightOptions === "q") {
      console.log(
        "You lay down your arms and look up to the sky. The regret of quitting eventually over takes you.. You long for battle once more, you should try again."
      );
      process.end;
    }
  }
  if (newPlayer.hp == 0) {
    console.log(
      playerName +
        " you died to " +
        newEncounter.enemy +
        ".... better luck next time!"
    );
  } else if (newEncounter.hp == 0) {
    enemyKilled(newEncounter);
    console.log(
      newEncounter.enemy +
        " has been eliminated. You have earned 200 HP as a Reward"
    );
    findItem(sportDrink);
    console.log(
      "Look, at that " +
        newEncounter.enemy +
        " died and dropped this item for you, you earned a sports drink worth 200hp!" +
        sportDrink.item
    );
  }
}
/* Take damage with enemy strike attack hp */
function enemyAttack(newEncounter) {
  newPlayer.reduceHP(Math.floor(Math.random() * newEncounter.ap));
  console.log(
    "Ouch, Your Taking Damage" +
      newEncounter.enemy +
      " hp remaining: " +
      newPlayer.hp
  );
}
function playerAttack(newEncounter) {
  newEncounter.reduceHP(Math.floor(Math.random() * newPlayer.ap + 50));
  console.log(
    "You are showing off now " +
      newEncounter.enemy +
      " HP remaining: " +
      newEncounter.hp
  );
}
/* reward for killing enemyEncounter */
function enemyKilled(newEncounter) {
  let encounterSP = enemies.indexOf(newEncounter);
  enemies.splice(encounterSP, 1);
  newPlayer.hp += 100;
  newPlayer.enemyKilled++;
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
