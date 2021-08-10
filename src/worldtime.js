const worldTimeBtn=document.getElementById("worldTimeBtn");
const togoClock=document.querySelectorAll(".togo__clock");
console.log(togoClock);

function addHidden(elem){
  elem.classList.add("hidden");
}
togoClock.forEach(addHidden);


function displayWorldTime(){

}
worldTimeBtn.addEventListener("click",displayWorldTime);

/*
const photo=document.querySelectorAll(".togo__photo");
const togoClock=document.querySelectorAll(".togo__clock");
console.log(togoClock);

function addHiddenPhoto(elem){
  const img=elem.querySelector("img");
  console.log(img);
  img.classList.add("hidden");
}
photo.forEach(addHiddenPhoto);


function displayWorldTime(){

}
worldTimeBtn.addEventListener("click",displayWorldTime);*/