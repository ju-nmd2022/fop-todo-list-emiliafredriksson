const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("add");
const choresElement = document.getElementById("chores");

// Array to store the chores
let choresArray = [];
// console.log(choresArray);

loadLocalStorage();
displayChores();

// The following 5 lines I got some help with from Arash.
function loadLocalStorage() {
  if (localStorage.chore) {
    choresArray = JSON.parse(localStorage.chore);
  }
}

addButtonElement.addEventListener("click", addChores);

inputElement.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    addChores();
  }
});

function addChores() {
  const chore = {
    text: inputElement.value,
    comepleted: false,
  };

  // Doesn't get pushed to the array if the input is emty
  if (inputElement.value.length > 0) {
    choresArray.push(chore);

    localStorage.chore = JSON.stringify(choresArray);

    displayChores();

    // To clear the inputfield
    inputElement.value = "";
  }
}

function displayChores(chore) {
  //Prevents tasks from multiplying
  choresElement.innerHTML = "";

  for (let chore of choresArray) {
    // Element where i put in all the other elements
    const choreBuldingBlocks = document.createElement("div");

    // Created span for the text
    const inputChore = document.createElement("span");
    inputChore.innerText = chore.text;
    inputChore.classList.add("text");
    choreBuldingBlocks.appendChild(inputChore);

    // Created button for marking chore as done
    const doneButton = document.createElement("button");
    doneButton.innerText = "✓";
    choreBuldingBlocks.appendChild(doneButton);

    doneButton.addEventListener("click", () => {
      // console.log(chore);

      if (chore.comepleted === true) {
        chore.comepleted = false;
      } else {
        chore.comepleted = true;
      }

      localStorage.chore = JSON.stringify(choresArray);
      displayChores();
    });

    // The following 3 lines of code I got some help from Arash
    if (chore.comepleted === true) {
      inputChore.style.textDecoration = "line-through";
    }

    // Created button for deleting chore
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "✕";
    choreBuldingBlocks.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      const choresIndex = choresArray.indexOf(chore);
      choresArray.splice(choresIndex, 1);

      localStorage.chore = JSON.stringify(choresArray);
      displayChores();
    });

    choresElement.appendChild(choreBuldingBlocks);
  }
}
