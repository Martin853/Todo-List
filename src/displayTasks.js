export function displayTasks(list, taskList) {
  // Task Container Variable

  const taskContainer = document.querySelector("#task-container");

  // Empty Task Container

  taskContainer.innerHTML = "";

  // Append the task div

  for (let i = 0; i < list.length; i++) {
    const taskDiv = document.createElement("div");
    taskDiv.id = "task";
    const textContent = document.createElement("div");
    const taskTitle = document.createElement("h1");
    taskTitle.innerText = list[i].taskTitle;
    const taskDescription = document.createElement("p");
    taskDescription.innerText = list[i].taskDescription;
    const taskDueDate = document.createElement("p");
    taskDueDate.innerText = list[i].dueDate;
    const buttonGroup = document.createElement("div");
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList = "edit";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList = "delete";

    // Delete Button

    deleteButton.addEventListener("click", function () {
      taskList.removeTask(i);
      displayTasks(list, taskList);
    });

    // Text Content Group

    textContent.append(taskTitle, taskDescription, taskDueDate);

    // Button Group

    buttonGroup.append(editButton, deleteButton);

    // Task Div

    taskDiv.append(textContent, buttonGroup);

    // Task Container

    taskContainer.appendChild(taskDiv);
  }
}
