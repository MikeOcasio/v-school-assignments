var readlineSync = require("readline-sync");

var divdr =
  "--------------------------------------------------------------------";

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

const elixir = new Inventory("Elixir", 175);

function findItem(elixir) {
  newPlayer.inventory.push(elixir);
}

function showInventory() {
  console.log(newPlayer);
}

function useItem() {
  if (newPlayer.inventory.length == 0) {
    console.log(
      "You search your pouch, but there is nothing there., You must deafeat an enemy to collects items they drop."
    );
  } else {
    newPlayer.hp += 200;
    console.log("You added 200HP");

    newPlayer.inventory.shift();
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
let enemies = [goblin, orc, harpy, lesserKnight, greaterKnight];

console.log("Welcome adventurer to Adventure RPG! ");

console.log(divdr);

var playerName = readlineSync.question("What is your name? ");
console.log(
  "Hey there, " +
    playerName +
    " the goal of the game is to kill all the monsters and you reach the town."
);

console.log(divdr);


function walk() {
  const odds = Math.random();
  if (odds > 0.5) {
    console.log("You move closer to the town.. no monsters are around.");
  } else {
    enemyEncounter();
  }
}

function enemyEncounter() {
  if (enemies.length == 0) {
    console.log(
      "You did it! You eliminated all the monsters....killing a total of " +
        +
        newPlayer.enemyKilled
        +
        " Enemies killed."
    );
    let end = readlineSync.keyIn("[q] for quit", { limit: "q" });
    if (end === "q") {
      process.exit();
    }
  } else {
    let newEncounter = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(
      "*DANGER* Its " +
        newEncounter.enemy +
        " you unsheath you sword and crack your neck, its fight time.."
    );
    console.log(newEncounter);
    firstFight(newEncounter);
  }
}
function firstFight(newEncounter) {
  while (newPlayer.isAlive() && newEncounter.isAlive()) {
    const fightOptions = readlineSync.keyIn(
      "[r]Run Away\n[e] Attack\n[u]Elixir\n[q]Quit the game",
      { limit: "reuq" }
    );

    const chanceOfEscape = Math.random();
    if (fightOptions === "r") {
      if (chanceOfEscape > 0.5) {
        console.log(
          "The monster throws a snare field, you cant escape.  If you have an item in your inventory it may be the appropriate time to use it."
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
      process.exit;
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
        " has been eliminated. You take the rest of the day to rest and recover gaining 200hp"
    );
    findItem(elixir);
    console.log(
      "AS you plunge your sword into its heart the " +
        newEncounter.enemy +
        " dies and drops an item for you, its an elixir worth 200hp" +
        elixir.item
    );
  }
}

function enemyAttack(newEncounter) {
  newPlayer.reduceHP(Math.floor(Math.random() * newEncounter.ap));
  console.log(
    "Your Taking Damage " +
      newEncounter.enemy +
      " hp remaining: " +
      newPlayer.hp
  );
}
function playerAttack(newEncounter) {
  newEncounter.reduceHP(Math.floor(Math.random() * newPlayer.ap + 50));
  console.log(
    "You swing your sword and wound the " +
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
    useItem(elixir);
  } else if (commands == "q") {
    if (enemies.length > 0) {
      console.log("You quit without defeating all the enemies");
      process.exit;
      break;
    }
  } else {
    console.log("You make it to the town all enemies were defeated!!");
    process.exit;
    break;
  }
}

