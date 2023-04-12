/* Code about local storage and JSON was written 
with help/inspiration of Tyler Potts on Youtube and 
Tamzin Cleggs code, some changes and adaption was made. 
Link:https://www.youtube.com/watch?v=UG2LXxILAnM */

const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("add");
const choresElement = document.getElementById("chores");

// Array to store the chores
const choresArray = [];
console.log(choresArray);

// function to get back the array from local storage
function storage() {
  const savedChores = localStorage.getItem("choresArray");

  if (savedChores) {
    choresArray = JSON.parse(choresArrey);
  }
}

addButtonElement.addEventListener("click", addChores);

// function to push input to array and store array in local storage
function addChores() {
  const chore = {
    text: inputElement.value,
    choreDone: false,
  };

  choresArray.push(chore);
  localStorage.setItem("choresArray", JSON.stringify(choresArray));

  displayChores();

  // To clear the inputfield
  inputElement.value = "";
}

function displayChores() {
  const chore = {
    text: inputElement.value,
    completed: false,
  };

  //   prevents tasks from multiplying
  choresElement.innerHTML = "";

  if (inputElement.value.length > 0) {
    for (let chores of choresArray) {
      const choreBuldingBlocks = document.createElement("div");

      const inputChore = document.createElement("span");
      inputChore.innerHTML = chore.text;
      inputChore.classList.add("text");
      choreBuldingBlocks.appendChild(inputChore);

      const doneButton = document.createElement("button");
      doneButton.innerText = "✓";
      choreBuldingBlocks.appendChild(doneButton);

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "✕";
      choreBuldingBlocks.appendChild(deleteButton);

      choresElement.appendChild(choreBuldingBlocks);

      doneButton.addEventListener("click", () => {
        chore.completed = true;
        inputChore.style.textDecoration = "overline";

        localStorage.setItem("choresArray", JSON.stringify(choresArray));
        displayChores();
      });

      deleteButton.addEventListener("click", () => {
        const choresIndex = choresArray.indexOf(chore);
        choresArray.splice(choresIndex, 1);

        localStorage.setItem("choresArray", JSON.stringify(choresArray));
        displayChores();
      });
    }
  }
}
