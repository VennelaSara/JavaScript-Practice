//   // DOM - Document Object Model - Dynamic Changes.
// console.log("Hello");
// alert("Hi");
// console.log(window.document); //will print html
// // Window Object - Browser's Object.
// // HTML element comes into JS and converted into object(Document) available in Window Object.
// console.dir(window.document); //will print document object
// // When a webpage is loaded ,the browser creates a Document Object Model(DOM) of the Page.
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.head);
// console.log(document.head);
// console.dir(document.body.childNodes[1]);
// // DOM Manipulation
// // If script is written in head then we cannot access document object since html is not loaded.
// let heading = document.getElementById("heading");
// console.dir(heading);
// let element = document.getElementsByClassName("Practice");
// console.dir(element);
// // If id donot exist then null and if class is not present then empty collection we get.
// let tag = document.getElementsByTagName("p");
// console.dir(tag);
// // QuerySelector - it identifies id,class,tag.
// // Returns NodeList.
// let myElement = document.querySelector("p");//first element
// console.dir(myElement);
// // All Elements
// let myElementAll = document.querySelectorAll("p");
// console.dir(myElementAll);
// let myElement2 = document.querySelector(".Practice");
// console.dir(myElement2);
// let myElement3 = document.querySelector("#heading");
// console.dir(myElement3);
// // Properties
// console.log(myElement.tagName);
// console.dir(document.querySelector(".DivClass").children);
// console.dir(document.querySelector(".DivClass").innerText);
// console.dir(document.querySelector(".DivClass").innerHTML);
// let div = document.querySelector("div");
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let divs = document.querySelectorAll(".box");
// console.dir(divs);
// divs[0].innerText = "<i>New Unique value 1</i>";
// divs[1].innerText = "<i>New Unique value 2</i>";
// divs[2].innerText = "<i>New Unique value 3</i>";
// let i=0;
// for(div of divs){
//   // console.log(div.innerText);
//   div.innerText = `New Unique Value ${i}`;
//   i++;
// }

                  // DOM Part-2
let myDiv = document.querySelector("div");
console.log(myDiv);
let givenName = myDiv.getAttribute("name");
console.log(givenName);
myDiv.setAttribute("name","Container");
myDiv.style.backgroundColor = "Orange";
myDiv.style.visibility = "hidden";

// Insert Elements
let el = document.createElement("button");
el.innerText = "Click Me";
console.log(el);
let listDiv = doccument.querySelector("listDiv");
listDiv.append(el);
listDiv.prepend(el);
listDiv.before(el);
listDiv.after(el);
let newHeading = document.createElement("h1");
h1.innerHTML = "<i>Hi,I am new!</i>";
document.querySelector("body").prepend(newHeading);
// Remove
newHeading.remove();
let newBtn = document.createElement("button");
newBtn.innerText = "Click";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);
let para = document.querySelector("p");
// para.setAttribute("Content","newClass");
para.classList.add("newClass");
console.dir(para);
para.classList.remove("newClass");