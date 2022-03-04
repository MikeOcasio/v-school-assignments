const num = [2, 10, 6, 5, 3];

// var sum = 0;

// for (i = 0; i < num.length; i++) {
//   var arr = num[i];

//   var add = sum + arr;
//   sum = add;
// }
// console.log(sum);
// // 0 = 2



/*
test
*/

let sum = 0
for (i = 0; i < num.length; i++) {
console.log("Iteration #", i)
console.log("current sum", sum)
    sum = num[i] + sum

    console.log("new sum at the end of iteration:", sum)
    console.log("End iteration")

}

// first iteration
// i = 0, num[0] = 2
// sum = num[0] + 0
// sum = 2+ 0
// sum =2

// second iteration
// i=1, 10
// sum = 10 + 2
/// 12

