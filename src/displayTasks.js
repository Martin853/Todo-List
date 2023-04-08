export function displayTasks(list, taskList) {
  // Task Container Variable

  const taskContainer = document.querySelector("#task-container");

  // Empty Task Container

  taskContainer.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const task = list[i];
    const taskHtml = `
        <div id="task">
          <div>
            <h1>${task.taskTitle}</h1>
            <p>${task.taskDescription}</p>
            <p>${task.dueDate}</p>
          </div>
          <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        </div>
      `;
    taskContainer.insertAdjacentHTML("beforeend", taskHtml);
  }
}
