const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("add");
const choresElement = document.getElementById("chores");
const completedElement = document.getElementById("completed");

const choresArray = [];
console.log(choresArray);

function save(){
    localStorage.saveChores = JSON.stringify(choresArray)
}

function refreshList(){
    choresElement.innerHTML = ""
    completedElement.innerHTML = ""

    for(let chores in choresArray){

    }
}

addButtonElement.addEventListener("click", addChores);

function addChores(chores) {
  if (inputElement.value.length > 0) {
    // console.log(inputElement.value);
    const item = {
        text: "inputChore"
        choreDone: false
    }

    // The text
    const inputChore = document.createElement("div");
    inputChore.innerText = inputElement.value;
    inputChore.classList.add("text");
    choresElement.appendChild(inputChore);

    inputElement.value = "";

    // The button for a completed task
    const doneButton = document.createElement("button");
    doneButton.innerText = "✓";
    choresElement.appendChild(doneButton);
    doneButton.addEventListener("click", () => {
      completedElement.appendChild(inputChore);
      doneButton.remove();
      completedElement.appendChild(deleteButton);
    });

    // The button to delete a task
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
