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
 const editBtn = document.createElement("button");
 editBtn.textContent = "Edit";
 editBtn.classList.add("edit-btn");
 const deleteBtn = document.createElement("button");
 deleteBtn.textContent = "Delete";
 deleteBtn.classList.add("delete-btn");
 editBtn.addEventListener("click", () => {
 startEditing(
 li,
 span,
 actions,
 editBtn,
 deleteBtn
 );
 });
 deleteBtn.addEventListener("click", () => {
 li.remove();
 });
 actions.appendChild(editBtn);
 actions.appendChild(deleteBtn);
 li.appendChild(checkbox);
 li.appendChild(span);
 li.appendChild(actions);
 taskList.appendChild(li);
}
function startEditing(
 li,
 span,
 actions,
 editBtn,
 deleteBtn
) {
 const originalText = span.textContent;
 const editInput = document.createElement("input");
 editInput.type = "text";
 editInput.value = originalText;
 editInput.classList.add("edit-input");
 li.replaceChild(editInput, span);
 const saveBtn = document.createElement("button");
 saveBtn.textContent = "Save";
 saveBtn.classList.add("save-btn");
 const cancelBtn = document.createElement("button");
 cancelBtn.textContent = "Cancel";
 cancelBtn.classList.add("cancel-btn");
 actions.innerHTML = "";
 actions.appendChild(saveBtn);
 actions.appendChild(cancelBtn);
 editInput.focus();
 editInput.select();
 const restoreButtons = () => {
 actions.innerHTML = "";
 actions.appendChild(editBtn);
 actions.appendChild(deleteBtn);
 };
 saveBtn.addEventListener("click", () => {
 const newText = editInput.value.trim();
 if (newText !== "") {
 span.textContent = newText;
 }
 li.replaceChild(span, editInput);
 restoreButtons();
 });
 cancelBtn.addEventListener("click", () => {
 li.replaceChild(span, editInput);
 restoreButtons();
 });
 editInput.addEventListener("keydown", (e) => {
 if (e.key === "Enter") {
 saveBtn.click();
 }
 if (e.key === "Escape") {
 cancelBtn.click();
 }
 });
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

