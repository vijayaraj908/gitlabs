const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
function createTask(taskText) {
const li = document.createElement("li");
li.classList.add("task");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
const span = document.createElement("span");
span.classList.add("task-text");
span.textContent = taskText;
checkbox.addEventListener("change", () => {
span.classList.toggle("completed", checkbox.checked);
});
li.appendChild(checkbox);
li.appendChild(span);
taskList.appendChild(li);
}
function addTask() {
const taskText = taskInput.value.trim();
if (!taskText) {
taskInput.focus();
return;
}
createTask(taskText);
taskInput.value = "";
taskInput.focus();
}
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
addTask();
}
});

