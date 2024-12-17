const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
addButton.addEventListener('click', () => {
  const task = input.value.trim(); // Get input value and remove extra spaces
  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    ${task}
    <button class="delete-btn">Remove</button>
  `;

  // Add remove functionality to the delete button
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  // Append the new item to the list
  todoList.appendChild(listItem);

  // Clear the input field
  input.value = '';
});