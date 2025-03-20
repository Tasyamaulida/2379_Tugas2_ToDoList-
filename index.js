let todos = [];

const inputElement = document.getElementById("inputTodo");
const containerTodos = document.getElementById("containerTodos");
const submitButton = document.getElementById("submitTodo");

submitButton.addEventListener("click", addTodo);

function addTodo() {
  const taskText = inputElement.value.trim();
  if (taskText === "") return;

  todos.push(taskText);
  renderTodos();
  inputElement.value = "";
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodo(index) {
  const newText = prompt("Edit your task:", todos[index]);
  if (newText !== null && newText.trim() !== "") {
    todos[index] = newText.trim();
    renderTodos();
  }
}

function renderTodos() {
  containerTodos.innerHTML = "";
  todos.forEach((task, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo");
    todoItem.innerHTML = `
      <span>${task}</span>
      <div>
        <button class="edit-todo" onclick="editTodo(${index})">
          Edit
        </button>
        <button class="delete-todo" onclick="deleteTodo(${index})">
          Delete
        </button>
      </div>
    `;
    containerTodos.appendChild(todoItem);
  });
}

// Event listener untuk menambahkan tugas dengan menekan Enter
inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// Tambahkan styling Twin Line ke CSS
const style = document.createElement('style');
style.innerHTML = `
  .todo {
    width: 100%;
    padding: 10px;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    border-radius: 5px;
  }
  .todo:nth-child(odd) {
    background: #e9e9e9;
  }
`;
document.head.appendChild(style);
