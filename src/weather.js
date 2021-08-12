const API_KEY="5504225852eb1e201f0744a162f40dc2";
function onGeoOk(position){
  const lat=position.coords.latitude;
  const lon=position.coords.longitude;
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response)=>response.json()).then((data)=>{
    const city=document.getElementById("weatherCity");
    const weather=document.getElementById("weatherTitle");
    const icon=document.getElementById("weahterIcon");
    const temp=document.getElementById("weahterTemp");
    city.innerText=data.name;
    weather.innerText=`${data.weather[0].main}`;
    paintWeatherIcon(icon,`${data.weather[0].icon}`);
    temp.innerText=`${data.main.temp} \u00B0`;
  });
}

function paintWeatherIcon(icon,iconNum){
  iconNum=iconNum.substring(0,2);
  console.log(iconNum);
  icon.src=`http://openweathermap.org/img/wn/${iconNum}d@2x.png`;
}
function onGeoError(){
  alert("Could not load location.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);