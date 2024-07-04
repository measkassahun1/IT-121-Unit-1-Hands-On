// Declare variables using var, let, and const
const taskTable = document
  .getElementById("task-table")
  .getElementsByTagName("tbody")[0];
const addTaskButton = document.getElementById("addTaskButton");
const removeTaskButton = document.getElementById("removeTaskButton");
const taskNameInput = document.getElementById("taskInput");
const taskDateInput = document.getElementById("taskDue");

// Create an array to hold list of tasks
let list = [];

// Create task objects
const task1 = {
  name: "Module 2 Class Activities",
  date: "07/07/24",
};

const task2 = {
  name: "Module 2 Quiz",
  date: "07/07/24",
};

const task3 = {
  name: "Unit 2 Hands On",
  date: "07/07/24",
};

const task4 = {
    name: "Tailor Module: Collaboration",
    date: "07/05/24",
  };

// Add the tasks to the array
list.push(task1, task2, task3, task4);

// Function to display list data in the HTML table and clear existing rows
function displayList() {
  taskTable.innerHTML = "";
  list.forEach((task, index) => {
    const row = taskTable.insertRow();

    // Name cells for name of tasks
    const nameCell = row.insertCell(0);
    nameCell.textContent = task.name;

    // Date cells for complete by
    const dateCell = row.insertCell(1);
    dateCell.textContent = task.date;

    // Checkbox cells for completed tasks
    const checkboxCell = row.insertCell(2);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.index = index;
    checkboxCell.appendChild(checkbox);
  });
}

// Event handler to remove tasks
function removeSelectedTasks() {
    const checkboxes = taskTable.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    checkboxes.forEach((checkbox) => {
      const index = checkbox.dataset.index;
      list.splice(index, 1); // Remove task from list
    });

    displayList(); // Update table
  }

// Event handler to add a new task
  function addTask() {
    const nameToAdd = taskNameInput.value.trim();
    const dateToAdd = taskDateInput.value.trim();

// Add new task to list and update task table
    if (nameToAdd && dateToAdd) {
      const newTask = { name: nameToAdd, date: dateToAdd };
      list.push(newTask); 
      displayList(); 
      taskNameInput.value = "";
      taskDateInput.value = "";
    } else {
      alert("Please fill in both task name and date fields.");
    }
  }

// Add event listeners
  addTaskButton.addEventListener("click", addTask);
  removeTaskButton.addEventListener("click", removeSelectedTasks);

// Display initial tasks list
  displayList();