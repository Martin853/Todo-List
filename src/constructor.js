export function TodoList() {
  this.tasks = [];

  this.addTask = function (task) {
    this.tasks.push(task);
  };

  this.removeTask = function (index) {
    this.tasks.splice(index, 1);
  };
}

export function Task(taskTitle, taskDescription, dueDate) {
  this.taskTitle = taskTitle;
  this.taskDescription = taskDescription;
  this.dueDate = dueDate;

  this.updateTitle = function (newTitle) {
    this.taskTitle = newTitle;
  };

  this.updateDescription = function (newDescription) {
    this.taskDescription = newDescription;
  };

  this.updateDueDate = function (newDueDate) {
    this.dueDate = newDueDate;
  };

  this.updateStatus = function (newStatus) {
    this.status = newStatus;
  };
}
