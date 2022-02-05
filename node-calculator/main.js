var readLineSync = require("readline-sync");

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function sub(num1, num2) {
  return Number(num1) - Number(num2);
}

function mul(num1, num2) {
  return Number(num1) * Number(num2);
}

function div(num1, num2) {
  return Number(num1) / Number(num2);
}

var user = readLineSync.question("Hello, what is your name? ");
console.log(`Hey there, ${user} welcome to node-calculator.`);

var number1 = readLineSync.question("Enter first number: ");
console.log(`Your first number is: ${number1}`);

var number2 = readLineSync.question("Enter second number: ");
console.log(`Your second number is: ${number2}`);

function operatorChoice() {
  let operator = readLineSync.question(`Select operator: `, {
    require: string,
  });
  switch (operator) {
    case "+":
      console.log(add(number1, number2));

      return operator;
    case "-":
      console.log(sub(number1, number2));

      return operator;
    case "*":
      console.log(mul(number1, number2));

      return operator;
    case "/":
      console.log(div(number1, number2));

      return operator;
    default:
      console.log("Please enter '+', '-', '*', or '/'!");
  }
}

operatorChoice();
