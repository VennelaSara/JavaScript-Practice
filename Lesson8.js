            //  Events
// The Change in the State of an Object is known as an Event.

let btn = document.querySelector("button");
btn.onClick = (e)=>{
  console.log("Button Was Clicked!");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX,e.clientY);
  let a = 25;
  a++;
  console.log(a);
};
let box = document.querySelector("div");
box.onmouseover = (e)=>{
  console.log("You are Inside Div");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX,e.clientY);
};
// Priority of JS is having more than inline
// If two same codes then previous one is Overridden.
// Event Object is a Special object which contains the information about the event.
// Event Handling - inline,JS event , EventListeners - listens to events ,wait when event occurs and then executes when event finally occur.
// For one node we can have multiple Event Listeners.
// node.addEventListener(event,callback);
// node.removeEventListener(event,callback);
btn.addEventListener("click",()=>{
  console.log("Button was Clicked - Handler1");
});
const handler2 = ()=>{
  console.log("Button was Clicked - Handler2");
};
btn.addEventListener("click",handler2);
// To remove the handlers(Call back reference must be Same) must be same.
btn.removeEventListener("click",handler2);


let currMode = "light"; //dark
let mode = document.querySelector("#mode");
mode.addEventListener("click",()=>{
console.log("You are trying to change mode");
if(currMode==="light"){
  currMode="dark";
  // document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").classList.add("dark");
  document.querySelector("body").classList.remove("light");
}
else{
currMode="light";
// document.querySelector("body").style.backgroundColor = "white";
document.querySelector("body").classList.add("light");
document.querySelector("body").classList.remove("dark");

}
});