const form = document.addItem;
let listItem = document.createElement("li");
let editButton = document.createElement("button");
let xButton = document.createElement("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const item = form.title.value;
  console.log(item);
  form.title.value = "";

  listItem.textContent = item;
  editButton.textContent = "edit";
  xButton.textContent = "X";

  document.getElementById("list").appendChild(listItem);
  document.getElementById("list").appendChild(editButton);
  document.getElementById("list").appendChild(xButton);


});
