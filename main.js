const todoList = [];
renderTodoList();
function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const indexTodo = todoList[i];
    const nameTodo = indexTodo.nameTodo;
    const schedule = indexTodo.schedule;
    const html = `
    <div>${nameTodo}</div>
    <div>${schedule}</div>
    <button onclick="todoList.splice(${i},1);
    renderTodoList();
    " class="delete-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-html-element').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-input-button').value;
  const inputDate = document.querySelector('.js-date-input').value;
  todoList.push({
    nameTodo: inputElement,
    schedule: inputDate
  });
  document.querySelector('.js-input-button').value = '';
  document.querySelector('.js-date-input').value = 'dd-mm-yyyy';
  renderTodoList();
}
