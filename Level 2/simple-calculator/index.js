"use_strict";

const form = document["add"]

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const number1 = form.add.value

    console.log(number1)
    
})
