const nameForm=document.querySelector(".name__form");
const nameInput=document.querySelector(".name__input");
const greetText=document.querySelector(".greeting");
const editNameBtn=document.getElementById("nameEdit");
const NAME_KEY="name";
function greeting(name){
  nameForm.classList.add("hidden");
  greetText.classList.remove("hidden");
  greetText.querySelector(".name__text").innerText=`Hello, ${name} `;
}
function handleNameSubmit(event){
  event.preventDefault();
  const name=nameInput.value;
  greeting(name);
  localStorage.setItem(NAME_KEY,name);

}
function editName(){
  nameForm.classList.remove("hidden");
  greetText.classList.add("hidden");
  nameInput.value="";
  nameForm.addEventListener("submit",handleNameSubmit);
}


const savedName=localStorage.getItem(NAME_KEY);
if(savedName!==null){
  
  greeting(savedName);
}

nameForm.addEventListener("submit",handleNameSubmit);
editNameBtn.addEventListener("click",editName);