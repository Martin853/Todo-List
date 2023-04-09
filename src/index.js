// Imports
import { Task, TodoList } from "./constructor";
import { displayTasks } from "./displayTasks";
import "./styles/main.scss";

// Variables

const addTask = document.querySelector("#add-task");
const modal = document.querySelector("#modal");
const cancelButton = document.querySelector("#cancel");
const saveButton = document.querySelector("#save");
const taskTitleInput = document.querySelector("#task-title");
const taskDescriptionInput = document.querySelector("#task-description");
const taskDueDateInput = document.querySelector("#task-date");

// Task List

const taskList = new TodoList();

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

// Save Button

saveButton.addEventListener("click", function () {
  // Getting the user Input
  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;
  const dueDate = taskDueDateInput.value;

  // Creating and adding the task to the task list
  const task = new Task(title, description, dueDate);
  taskList.addTask(task);
  console.log(taskList);

  // Clearing the input fields and closing the modal
  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  taskDueDateInput.value = "";
  modal.style.display = "none";

  // Store the task list in local storage
  localStorage.setItem("taskList", JSON.stringify(taskList));

  // Update the list

  updateTaskList();
});

function updateTaskList() {
  displayTasks(taskList.tasks, taskList);
}

// Load from local storage
const storedTasks = JSON.parse(localStorage.getItem("taskList"));
console.log(storedTasks);

if (typeof storedTasks === "object" && storedTasks !== null) {
  for (const taskData of storedTasks.tasks) {
    const task = new Task(
      taskData.taskTitle,
      taskData.taskDescription,
      taskData.dueDate
    );
    taskList.addTask(task);
    displayTasks(taskList.tasks, taskList);
  }
}
