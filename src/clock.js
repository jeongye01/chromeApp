const clock=document.querySelector(".clock__text");

function displayTime(){
  const date=new Date();
  const h=String(date.getHours()).padStart(2,"0");
  const m=String(date.getMinutes()).padStart(2,"0");
  const s=String(date.getSeconds()).padStart(2,"0");
  clock.innerText=`${h}:${m}:${s}`;
}


setInterval(displayTime,1000);