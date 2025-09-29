// Select elements
const input = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to create a new task element
function createTask(taskText) {
    const li = document.createElement("li");
    li.classList.add("task");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Add task on button click
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        input.value = "";
        input.focus();
    }
});

// Add task on Enter key
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});
