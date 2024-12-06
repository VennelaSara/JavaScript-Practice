                    // Operators and Conditional Statements.

// This is a Single line Comment(Which is not Executed).
/*
This is a 
multi-line Comment.
*/
// Operators to perform some Operation on Data.
// a+b -> Expression 
// a,b -> Operands
// + -> Operator.
// 1.Arithmetic Operator
// Binary Operators
let a = 5;
let b = 6;
console.log("a = ",a,"& b = ",b);
console.log("a+b = ",a+b);
console.log("b-a = ",b-a);
console.log("a*b = ",a*b);
console.log("b/a = ",b/a); //Quotient
console.log("b%a = ",b%a); //Remainder
console.log("a**b = ",a**b); //Exponentiation
let c = a+b;
console.log("c = a+b -> ",c);
// Unary Operators
console.log("a++ = ",a++); //PostIncrement - print and change in next line.
console.log("++a = ",++a); //PreIncrement - change and print.
console.log("a-- = ",a--);
console.log("--a = ",--a);
// 2.Assignment Operators
console.log("a+=b -> ",a+=b);
console.log("a-=b -> ",a-=b);
console.log("a*=b -> ",a*=b);
console.log("b/=a -> ",b/=a);

// Comparison Operators
a = 5;
b = "5"; //In Equal to JS implicitly converts strong to number for Comparison.
console.log("a==b -> ",a==b); //Equal to
console.log("a===b -> ",a===b); //Equal to and type
console.log("a!=b -> ",a!=b); //Not Equal to
console.log("a!==b -> ",a!==b); //Not equal to and type.
console.log("a<b -> ",a<b);
console.log("a>b -> ",a>b);
console.log("a<=b -> ",a<=b);
console.log("a>=b -> ",a>=b);

// Logical Operators
// Evaluate multiple Expressions and Produce Boolean Values.
a = 6;
b = 5;
let cond1 = a>b;
let cond2 = a===6;
console.log("a = 6 ","b = 5");
console.log("cond1 -> a>b");
console.log("cond2 -> a===6");
console.log("cond1 && cond2 -> ",cond1&&cond2);
console.log("cond1 || cond2 -> ",cond1||cond2);
console.log("!cond1 -> ",!cond1);

// Conditional Statements
let color;
mode = "dark-mode"
if(mode==="dark-mode"){
  color="black";
}
if(mode==="light")
{
  color="white";
}
console.log(color);
let age = 25;
// if(age>=18){
//   console.log("You can Vote");
// }
// if(age<18){
//   console.log("You cannot Vote");
// }

if(age>18){
  console.log("Vote");
}
else{
  console.log("Not Vote");
}

let num = 124;
if(num%2==0)
  console.log(num," is Even");
else
console.log(num," is Odd");

if(age<18){
  console.log("Junior");
}
else if(age>60)
  console.log("Senior");
else
console.log("Middle");
// Ternary Operator
let result = age>18?"Adult":"Not Adult";
console.log(result);

// MDN DOCS

// Below execute on Browser Console.
// alert("Hello"); //popup

// Practice Questions 

// let Thename = prompt("Hello") //message and input
// console.log(Thename);

let Myresult = prompt("Enter a Number");
if(Myresult%5===0){
  console.log("Number is Multiple of 5");
}
else{
  console.log("Number is not a multiple of 5");
}

let marks = prompt("Enter Marks");
if(marks>=90&&marks<=100)
  grade = "A";
else if(marks>=70&&marks<=89)
  grade = "B";
else if(marks>=60&&marks<=69)
  grade = "C";
else if(marks>=50&&marks<=59)
  grade = "D";
else if(marks>=0&&marks<=49)
grade = "F";
console.log("According to your Marks ,Your Grade was : ",grade);


