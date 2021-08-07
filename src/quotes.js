const quotes=[
  "If you want the rainbow, you gotta put up with the rain",
  "The road to success and the road to failure are almost exactly the same.",
  "Success usually comes to those who are too busy looking for it.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "Success is not final; failure is not fatal.",
  "Work hard in silence, let your success be your noise.",
  "If not now,when?",
  "If opportunity doesn’t knock, build a door.",
  "You only live once, but if you do it right, once is enough.",
  "It is never too late to be what you might have been."
];
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
const bg=document.querySelector(".quotes");
const color1=Math.floor(Math.random()*colors.length);
const color2=Math.floor(Math.random()*colors.length);
bg.style.background="linear-gradient(45deg,"+colors[color1]+","+colors[color2]+")";
