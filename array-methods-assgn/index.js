var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//remove last item in vegetable array

var removeVeggie = vegetables.pop();
console.log(vegetables);

//remove the first item from fruit array

var killFruit = fruit.shift();
console.log(fruit);

//find the index of orange

var daOrange = fruit.indexOf("orange");
console.log(daOrange);

//add that number to the end of fruit array

var addOne = fruit.push(daOrange);
console.log(fruit);

//find the length of the vegetable array 

var veggieLength = vegetables.length;
console.log(veggieLength);

//add that number to the end of the vegetables array

var add3 = vegetables.push(veggieLength);
console.log(vegetables)

//add the two arrays together and save it as food. "fruit" first

var foods = fruit.concat(vegetables);
console.log(foods);

//remove 2 elements from the array starting at 4

var foodSplice = foods.splice(4, 2)
console.log(foods);

//reverse your array

var reversedFoods = foods.reverse();
console.log(reversedFoods);

//turn the array into a string

var stringArr = reversedFoods.toString();
console.log(stringArr);