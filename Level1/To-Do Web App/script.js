const todoList = document.getElementById('todo-list');
const newTaskForm = document.getElementById('add-task-form');
const newTaskInput = document.getElementById('new-task');

newTaskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Check if task input is empty
  const taskValue = newTaskInput.value.trim(); // Trim whitespace
  if (!taskValue) {
    alert("Please enter a task before adding!");
    return;
  }

  // Create a new list item for the task
  const newTodoItem = document.createElement('div');
  newTodoItem.classList.add('todo-item');

  // Create task text
  const newTaskText = document.createElement('span');
  newTaskText.innerText = taskValue;
  newTodoItem.appendChild(newTaskText);

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    newTodoItem.classList.toggle('completed');
  });
  newTodoItem.appendChild(checkbox);

  // Add task to the list
  todoList.appendChild(newTodoItem);

  // Clear the input field
  newTaskInput.value = '';
});
