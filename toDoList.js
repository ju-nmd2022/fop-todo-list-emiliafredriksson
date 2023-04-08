const listElement = document.getElementById("list");
const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("add");
const choresElement = document.getElementById("chores");

addButtonElement.addEventListener("click", addChores);

function addChores() {
  if (inputElement.value.length > 0) {
    // console.log(inputElement.value);
    const inputChore = document.createElement("div");
    inputChore.innerText = inputElement.value;
    choresElement.appendChild(inputChore);
  }
}
