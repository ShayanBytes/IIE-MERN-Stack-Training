const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo_list');

addTodoButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText == '') {
        alert("Enter Something Valid !!!")
    }
    else{
        
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        todoInput.value = '';
    
    }
});
