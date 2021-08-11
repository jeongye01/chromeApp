const worldTimeBtn=document.getElementById("worldTimeBtn");
const timeText=document.querySelector(".timebtn-text");
const imgText=document.querySelector(".imgbtn-text");
const togoClock=document.querySelectorAll(".togo__clock");



function removeHidden(elem){
  elem.classList.toggle("hidden");
}
function addHidden(elem){
  elem.classList.add("hidden");
}
togoClock.forEach(addHidden);


function displayWorldTime(){
  togoClock.forEach(removeHidden);
  if(togoClock[0].classList.contains("hidden")){
    console.log("alalall")
    imgText.classList.toggle("hidden",true);
    timeText.classList.toggle("hidden",false);
  }else{
    imgText.classList.toggle("hidden",false);
    timeText.classList.toggle("hidden",true);
  }
}
worldTimeBtn.addEventListener("click",displayWorldTime);



