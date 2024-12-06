                //  Introduction

// JavaScript is a Programming Language.
// We can use browser or code editors to run this javascript and get Output.
// Can use Console of Browsers to write JavaScript.
// Used in WebDevelopment to add Interactivity to Webpages.

console.log("Hello World!");

// Variables are Containers to store Values
var fullName = "Tony Stark"; //redeclare and update
let name = "Hulk"; //Only update not redeclare
const Name = "Captain America"; //Cannot update and cannot redeclare. Used to assign constant values like PI.

age = 18; //JS is Dynamically typed language that is we don't specify the type of the variable and it is understood at the Runtime.
console.log(fullName);
console.log(name);
console.log(Name);
console.log(age);
// alert("Vennela"); for a PopUp in Browser.

let b = 10;
b = 20;
console.log(b);

// After 2015 ECMAScript [ES6] was introduced - new Standards.
// Default value of Variable is Undefined.
// const variables must be initialised.
// var usage is not preferred because redeclaring variable again and again , we will lose the track of that variable values so mostly let is used.
// var - Global Scope
// let - Block Scope
// const - Bock Scope.

{
  let a = 5;
  console.log(a);
}
{
  let a = 20;
  console.log(a);
}
// DataTypes
// Primitive - fixed - 7 
age = 24; //number
console.log(typeof(age));
let price = 100.40; 
console.log(typeof(price));
let FullName = "Tony Stark"; //string
console.log(typeof(FullName));
let isFollow = true; //Boolean
console.log(typeof(isFollow));
let x; //Undefined - by default all variables are undefined (not initialized)
console.log(typeof(x));
let y = null; //Absence of an Object
console.log(typeof(y));
let z = BigInt("123");
console.log(typeof(z));
let s = Symbol("Hello");
console.log(typeof(s));

// Non-Primitive - Objects
// Under Objects we have Arrays,Functions
// Objects - Collection of values
// Student info - name string,rollno number,marks number,isPass boolean- this is an object.
// Object stores Key Value pair
const student = {
  fullName:"Rahul",
  age:20,
  cgpa:10.0,
  isPass:true
};
console.log(student);
console.log(typeof(student));
// object.key or object[key] both gives same value.
console.log(student["fullName"]); //Use quotes while using Square Brackets since if not used ma consider as another Variable.
console.log(student.fullName);

student["age"] = student["age"]+1;
student["fullName"] = "Rahul Sharma";

// Here we can change constant object keys since it doesnot change the whole Object itself.
// const name = "Rahul"  
// name = "Sharma" - Gives Error since can't change const decalred Variables.

// Practice Questions
const product = {
  title:"BallPen",
  name:"Parker Jotter Standard CT Ball Pen",
  rating:5,
  offer:50,
  price:270,
  isDeal:true
}
console.log(product);
console.log(typeof(product));

// We can connect our Javascript code in Editor with Browser by running HTML which contains
//  Script Tag.
// We can also perform Arithmetic Operations on Browser Console.
// "123"+1 => '1231' (String Concatenation).
// "abc"+123 => 'abc123'.

const profile = {
  UserName:"Rahul",
  isFollow:true,
  posts:195,
  following:4,
  followers:589000,
}
console.log(profile);
console.log(typeof(profile));
console.log(typeof(profile["UserName"])); //To find type of individual key in the Object.



