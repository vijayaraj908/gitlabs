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
 const actions = document.createElement("div");
 actions.classList.add("actions");
 const deleteBtn = document.createElement("button");
 deleteBtn.textContent = "Delete";
 deleteBtn.classList.add("delete-btn");
 deleteBtn.addEventListener("click", () => {
 li.remove();
 });
 actions.appendChild(deleteBtn);
 li.appendChild(checkbox);
 li.appendChild(span);
 li.appendChild(actions);
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
