const bgs=[
  "cloud1.jpg",
  "cloud2.jpg",
  "cloud3.jpg",
  "cloud4.jpg",
  "cloud5.jpg",
  "cloud6.jpg",
];

const chosenImg=Math.floor(Math.random()*bgs.length);
console.log(chosenImg);
const bgImg=document.createElement("img");
bgImg.src=`img/clouds/${bgs[chosenImg]}`;
bgImg.classList.add("bgImage");
document.body.appendChild(bgImg);
