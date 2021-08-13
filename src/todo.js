const todoForm=document.querySelector(".todo__form");
const todoInput=document.querySelector(".todo__input");
/*todo list*/
const listAll=document.querySelector("#todo__list--all");
const listRemaining=document.querySelector("#todo__list--remaining");
const listCompleted=document.querySelector("#todo__list--compeleted");

/*buttons*/
const allBtn=document.querySelector("#todo__all");
const remainingBtn=document.querySelector("#todo__remaining");
const completedBtn=document.querySelector("#todo__completed");

/*progressBar*/
const progressBar=document.getElementById("progressBar");
const pregoressText=document.getElementById("progressText");
function calProgress(todo,comp){
 
  if(todo.length===0){
    pregoressText.innerText="0% completed";
    progressBar.style.width=0+"%";
  }
  else{
    const percentage=parseInt((comp.length/todo.length)*100);
    pregoressText.innerText=`${percentage}% completed`;
    progressBar.style.width=percentage+"%";}
}



/*todo List*/
let todos=[];
let completed=[];
let remaining=[];

/*keys*/
const TODOS_KEY="todos";
const REMAINING_KEY="remaining";
const COMPLETED_KEY="completed";

/*onBtnClick functions*/
function onAllBtn(){
  listAll.classList.toggle("hidden",false);
  listRemaining.classList.toggle("hidden",true);
  listCompleted.classList.toggle("hidden",true);
  
}
function onRemaningBtn(){
  listAll.classList.toggle("hidden",true);
  listRemaining.classList.toggle("hidden",false);
  listCompleted.classList.toggle("hidden",true);
}
function onCompletedBtn(){
  listAll.classList.toggle("hidden",true);
  listRemaining.classList.toggle("hidden",true);
  listCompleted.classList.toggle("hidden",false);
}


/* paint functions */
function paintTodos(newTodoObj){
  const li=document.createElement("li");
  const span=document.createElement("span");
  const deleteBtn=document.createElement("button");
  
  span.innerText=newTodoObj.text;
  li.id=newTodoObj.id;
  li.appendChild(span);
  if(newTodoObj.checked){
    span.classList.add("todo__completed-text");
  }
  else{
    const completeBtn=document.createElement("button");
    completeBtn.setAttribute("class","far fa-check-circle");
    completeBtn.addEventListener("click",handleCompleted);
    li.appendChild(completeBtn);
  }
  
  deleteBtn.setAttribute("class","far fa-trash-alt");
  deleteBtn.addEventListener("click",deleteTodo);
  li.appendChild(deleteBtn);
 
  listAll.appendChild(li);
}

function paintRemainings(newTodoObj){
  const li=document.createElement("li");
  const span=document.createElement("span");
  span.innerText=newTodoObj.text;
  li.id=newTodoObj.id;  
  li.appendChild(span);
  listRemaining.appendChild(li);
}
function paintCompleteds(newCompletedObj){
  const li=document.createElement("li");
  const span1=document.createElement("span");
  const span2=document.createElement("span");
  span1.innerText=newCompletedObj.text;
  span2.innerText=newCompletedObj.timeStamp;
  li.id=newCompletedObj.id;
  li.appendChild(span1);
  li.appendChild(span2);
  listCompleted.appendChild(li);
  
}

/*save functions */
function saveTodos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}
function saveRemainings(){
  localStorage.setItem(REMAINING_KEY,JSON.stringify(remaining));
}
function saveCompleteds(){
  localStorage.setItem(COMPLETED_KEY,JSON.stringify(completed));
}



/*Deletefunction */
function deleteTodo(event){
  const li=event.target.parentElement;
  li.remove();
  const liRemaining=document.getElementById(`${String(parseInt(li.id)+1)}`);
  if(liRemaining!==null){
    liRemaining.remove();
    remaining=remaining.filter((remain)=>parseInt(remain.id)!==parseInt(li.id)+1);
    saveRemainings();}
  const liCompleted=document.getElementById(`${String(parseInt(li.id)+2)}`);
  if(liCompleted!==null){
    liCompleted.remove();
    completed=completed.filter((complete)=>parseInt(complete.id)!==parseInt(li.id)+2);
    saveCompleteds();}
  todos=todos.filter((todo)=>parseInt(todo.id)!==parseInt(li.id));
  
  
  saveTodos();
  calProgress(todos,completed);
  
}
function deleteRemaning(ID){
  const li=document.getElementById(`${String(ID)}`);
  console.log(li);
  remaining=remaining.filter((remain)=>parseInt(remain.id)!==parseInt(ID));
  li.remove();
  saveRemainings();
 
}




/*Complete Function */
function handleCompleted(event){
  const btn=event.target;
  const li=event.target.parentElement;
  const time=new Date();
  const h=String(time.getHours()).padStart(2,"0");
  const m=String(time.getMinutes()).padStart(2,"0");
  const s=String(time.getSeconds()).padStart(2,"0");
  li.firstChild.classList.add("todo__completed-text");
  btn.remove();
  const newCompletedObj ={
    text: li.firstChild.innerText,
    id:parseInt(li.id)+2,
    timeStamp:`${h}:${m}:${s}`
  }
  for(let i=0;i<todos.length;i++){
    if(todos[i].id===parseInt(li.id)){
      todos[i].checked=true;
    }
  }
  saveTodos();
  paintCompleteds(newCompletedObj);
  completed.push(newCompletedObj);
  saveCompleteds();
  deleteRemaning(parseInt(li.id)+1);
  calProgress(todos,completed);
}


/*submit function*/
function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo=todoInput.value;
  todoInput.value="";
  const newTodoObj={
    text:newTodo,
    id:Date.now(),
    checked:false
  };
  const newRemaningObj={
    text:newTodo,
    id:Date.now()+1,
  };
  todos.push(newTodoObj);
  remaining.push(newRemaningObj);
  paintTodos(newTodoObj);
  paintRemainings(newRemaningObj);
  saveTodos();
  saveRemainings();
  calProgress(todos,completed);
}

/*eventLister-submit */
todoForm.addEventListener("submit",handleTodoSubmit);
/*eventLister-btn */
allBtn.addEventListener("click",onAllBtn);
remainingBtn.addEventListener("click",onRemaningBtn);
completedBtn.addEventListener("click",onCompletedBtn);


const savedTodos=localStorage.getItem(TODOS_KEY);
const savedRemainings=localStorage.getItem(REMAINING_KEY);
const savedCompleteds=localStorage.getItem(COMPLETED_KEY);
if(savedTodos!==null){
  todos=JSON.parse(savedTodos);
  todos.forEach(paintTodos);
}
if(savedRemainings!==null){
  remaining=JSON.parse(savedRemainings);
  remaining.forEach(paintRemainings);
}

if(savedCompleteds!==null){
  completed=JSON.parse(savedCompleteds);
  completed.forEach(paintCompleteds);
}

calProgress(todos,completed);



