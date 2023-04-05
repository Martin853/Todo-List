// Imports
import "./styles/main.scss";

// Variables

const addTask = document.querySelector("#add-task");
const modal = document.querySelector("#modal");
const cancelButton = document.querySelector("#cancel");

// Task List

// Add Task Button

addTask.addEventListener("click", function () {
  modal.style.display = "flex";
});

// Cancel Button

cancelButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
