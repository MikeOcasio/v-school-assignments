var changeColor = document.querySelector("#box");

// r = red, y = yellow, b = blue, etc.

document.addEventListener("keydown", function (event) {
  let keyCode = event.which;
  if (keyCode == 66) {
    changeColor.style.backgroundColor = "#343CF3 ";
  } else if (keyCode == 82) {
    changeColor.style.backgroundColor = "#DA122A ";
  } else if (keyCode == 89) {
    changeColor.style.backgroundColor = "#F7F73A ";
  } else if (keyCode == 71) {
    changeColor.style.backgroundColor = "#1f8a0f";
  } else if (keyCode == 79) {
    changeColor.style.backgroundColor = "##1F8A0F ";
  } else if (keyCode == 73) {
    changeColor.style.backgroundColor = "#9bcad4";
  }
});

changeColor.addEventListener("mouseover", function (event) {
  event.target.style.backgroundColor = "blue";
});
/* While holding mouse down */
changeColor.addEventListener("mousedown", function (event) {
  event.target.style.backgroundColor = "red";
});
/* click was held and on release */
changeColor.addEventListener("mouseup", function (event) {
  event.target.style.backgroundColor = "yellow";
});
/* double left click */
changeColor.addEventListener("dblclick", function (event) {
  event.target.style.backgroundColor = "green";
});
/* Mouse Wheel */
document.addEventListener("wheel", function (event) {
  changeColor.style.backgroundColor = "orange";
});

//Studied up  on the "which"  case  that it was deprecated. Was moved over to "switch case"

// const log = document.getElementById("#box");

// document.addEventListener("keydown", logKey);

// function logKey(r) {
//       changeColor.style.backgroundColor = "#DA122A ";
// }