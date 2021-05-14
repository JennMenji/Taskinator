var formEl = document.querySelector("#task-form");
var tasksToDoListEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoListEl.appendChild(listItemEl);
  console.log(event);
};

formEl.addEventListener("submit", createTaskHandler);
