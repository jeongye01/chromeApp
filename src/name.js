const nameForm=document.querySelector(".name__form");
const nameInput=document.querySelector(".name__input");
const greetText=document.querySelector(".name__text");
const NAME_KEY="name";
function greeting(name){
  nameForm.classList.add("hidden");
  greetText.classList.remove("hidden");
  greetText.innerText=`Hello, ${name} `;
}
function handleNameSubmit(event){
  event.preventDefault();
  const name=nameInput.value;
  greeting(name);
  localStorage.setItem(NAME_KEY,name);

}

nameForm.addEventListener("submit",handleNameSubmit);
const savedName=localStorage.getItem(NAME_KEY);
if(savedName!==null){
  
  greeting(savedName);
}