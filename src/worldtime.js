const worldTimeBtn=document.getElementById("worldTimeBtn");
const timeText=document.querySelector(".timebtn-text");
const imgText=document.querySelector(".imgbtn-text");
const togoClock=document.querySelectorAll(".togo__clock");


/*Hot Places */
const timeDubai=document.getElementById("timeDubai");
const timeBangkok=document.getElementById("timeBangkok");
const timeCairo=document.getElementById("timeCairo");
const timeBerlin=document.getElementById("timeBerlin");
const timeHongkong=document.getElementById("timeHongkong");
const timeJakarta=document.getElementById("timeJakarta");
const timeIstanbul=document.getElementById("timeIstanbul");
const timeLA=document.getElementById("timeLA");
const timeLasvegas=document.getElementById("timeLasvegas");
const timeLondon=document.getElementById("timeLondon");
const timeNewyork=document.getElementById("timeNewyork");
const timeParis=document.getElementById("timeParis");
const timeRome=document.getElementById("timeRome");
const timeShanghai=document.getElementById("timeShanghai");
const timeBern=document.getElementById("timeBern");



const DUBAI=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Asia/Dubai',

});
const BANGKOK=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Asia/Bangkok',

});
const CAIRO=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Africa/Cairo',

});
const BERLIN=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Europe/Berlin',

});
const HONGKONG=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Asia/Hong_Kong',

});
const JAKARTA=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Asia/Jakarta',

});
const ISTANBUL=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Asia/Istanbul',

});
const LA=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'America/Los_Angeles',

});
const LASVEGAS=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'America/Los_Angeles'

});
const LONDON=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Europe/London'

});
const NEWYORK=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'America/New_York'

});
const PARIS=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Europe/Paris'

});
const ROME=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Europe/Rome'

});
const SHANGHAI=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Asia/Shanghai'

});
const BERN=new Intl.DateTimeFormat('en-us',{
  hourCycle:'h12',
  month:'numeric',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  timeZone:'Europe/Paris'

});


function updateWorldTime(){
  timeDubai.innerText=DUBAI.format(new Date());
  timeBangkok.innerText=BANGKOK.format(new Date());
  timeCairo.innerText=CAIRO.format(new Date());
  timeBerlin.innerText=BERLIN.format((new Date()));
  timeHongkong.innerText=HONGKONG.format((new Date()));
  timeJakarta.innerText=JAKARTA.format(new Date());
  timeIstanbul.innerText=ISTANBUL.format(new Date());
  timeLA.innerText=LA.format(new Date());
  timeLasvegas.innerText=LASVEGAS.format(new Date());
  timeLondon.innerText=LONDON.format(new Date());
  timeNewyork.innerText=NEWYORK.format(new Date());
  timeParis.innerText=PARIS.format(new Date());
  timeRome.innerText=ROME.format(new Date());
  timeShanghai.innerText=SHANGHAI.format(new Date());
  timeBern.innerText=BERN.format(new Date());
  
}
updateWorldTime();
setInterval(updateWorldTime,1000);



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



