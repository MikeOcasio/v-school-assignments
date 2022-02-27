for (let i = 0; i <= 100; i++) {
    let output = [];

    //all numbers divisible by 3 &&/ or all numbers divisible by 5 that both have a remainder of 0, result= "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(output += "FizzBuzz");