                // Classes and Objects
// Objects are entities which have properties and methods.
// JS Objects have a special property called Prototype(which is again an Object).
const student = {
fullName:"Ram",
marks:94.4,
printMarks:function(){
  console.log("Marks = ",this.marks);
},
};
const employee = {
  calcTax(){
    console.log("Tax rate is 10%");
  },
  calTax2:function (){
    console.log("Tax rate is 15%");
  }
};
const karanArjun = {
  salary:10000,
  calcTax(){
    console.log("Tax rate is 20%");
  }
}
karanArjun.__proto__ = employee;
// To access other objects properties we will use in our curretn object by using __proto__.
// If object and Prototype have same method, object's method will be used.


// Class is a program-code template for creating objects.
// Those objects will have some state(variables)&some behaviour(funtions) inside it.
class ToyotaCar{
start(){
  console.log("Start");
}
stop(){
  console.log("Stop");
}
}
let fortuner = new ToyotaCar();
class Person{
  eat(){
    console.log("Eat");
  }
  sleep(){
    console.log("Sleep");
  }
}
class Engineer extends Person{
  work(){
    console.log("Solve Problems , build Something");
  }
}
let sofia = new Engineer();
// If Child & Parent have same method,child's method will be used(Method Overriding).
// To use parent's method we use Super Keyword.