const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
const bgQuote=document.querySelector(".quotes");
const quoteColor1=Math.floor(Math.random()*colors.length);
const quoteColor2=Math.floor(Math.random()*colors.length);
bgQuote.style.background="linear-gradient(45deg,"+colors[quoteColor1]+","+colors[quoteColor2]+")";
/*
const bgTodo=document.querySelector(".todo__input");
const todoColor1= quoteColor1;
const todoColor2=quoteColor2;
bgTodo.style.background="linear-gradient(45deg,"+colors[todoColor1]+","+colors[todoColor2]+")";*/