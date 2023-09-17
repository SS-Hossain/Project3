const todoList = [];

 todoListRender();

function todoListRender(){
 let todoListHTML = '';
 for(let i = 0; i < todoList.length; i++){
  let todoObject = todoList[i];
  let name = todoObject.name;
  let duedate = todoObject.duedate;
  let html = `
  <div>${name}</div> 
  <div>${duedate}</div>
  <button onclick="
    todoList.splice(${i},1);
    todoListRender();
  " class="delete-button">Delete</button>
  `;
  todoListHTML += html;
}
  
  document.querySelector('.js-todo-list').innerHTML = `${todoListHTML}`;
} 

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  const duedateElement = document.querySelector('.js-due-date-input');
  const duedate = duedateElement.value;
  todoList.push({
    name:name,
    duedate:duedate
  });
  
  inputElement.value = '';
  todoListRender();
 }