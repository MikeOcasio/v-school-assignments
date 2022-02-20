var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var updatedArr = [];

function forception() {
  for (var i = 0; i < people.length; i++) {
    // This creates a new array and pushes the names plus a ":"
    updatedArr.push(people[i] + ":");
    for (var i = 0; i < alphabet.length; i++) {
      // This loops through the new alphabet and pushes each letter to the new array
      updatedArr.push(alphabet[i].toUpperCase());
    }
    console.log(updatedArr);
  }
  return updatedArr;
}
forception();