const todoForm=document.querySelector(".todo__form");
const todoInput=document.querySelector(".todo__input");
const todoList=document.querySelector(".todo__list");

let todos=[];
let completed=[];
let remaing=[];
const TODO_KEY="todos";
function addTodos(newTodoObj){
  todos.push(newTodoObj);
}
function paintTodos(newTodoObj){
  const li=document.createElement("li");
  const span=document.createElement("span");
  const button=document.createElement("button");
  span.innerText=newTodoObj.text;
  button.innerText="X";
  button.addEventListener("click",handleTodoDelete);
  li.id=newTodoObj.id;
  console.log(li.id);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}
function saveTodos(){
  localStorage.setItem(TODO_KEY,JSON.stringify(todos));
}
function handleTodoDelete(event){
  const li=event.target.parentElement;
  li.remove();
  console.log(li.id);
  todos=todos.filter((todo)=>parseInt(todo.id)!==parseInt(li.id));
  console.log(todos);
  saveTodos();
}
function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo=todoInput.value;
  todoInput.value="";
  const newTodoObj={
    text:newTodo,
    id:Date.now(),
  };
  addTodos(newTodoObj);
  paintTodos(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos=localStorage.getItem(TODO_KEY);
if(savedTodos!==null){
  const parsedTodos=JSON.parse(savedTodos);
  parsedTodos.forEach(paintTodos);
  todos=parsedTodos;
}


