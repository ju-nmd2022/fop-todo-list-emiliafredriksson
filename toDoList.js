const listElement = document.getElementById("list");
const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("add");
const choresElement = document.getElementById("chores");
const completedElement = document.getElementById("completed");

addButtonElement.addEventListener("click", addChores);

function addChores() {
  if (inputElement.value.length > 0) {
    // console.log(inputElement.value);
    const inputChore = document.createElement("div");
    inputChore.innerText = inputElement.value;
    inputChore.classList.add("text");
    choresElement.appendChild(inputChore);

    inputElement.value = "";

    const doneButton = document.createElement("button");
    doneButton.innerText = "✓";
    choresElement.appendChild(doneButton);
    doneButton.addEventListener("click", () => {
      completedElement.appendChild(inputChore);
      doneButton.remove();
      completedElement.appendChild(deleteButton);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "✕";
    choresElement.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      inputChore.remove();
      doneButton.remove();
      deleteButton.remove();
    });
  }
}
