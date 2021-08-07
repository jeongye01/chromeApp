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



const quote=document.querySelector(".quotes__text");
const text=Math.floor(Math.random()*quotes.length);
quote.innerText=quotes[text];