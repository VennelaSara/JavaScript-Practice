            //  Functions and Methods
// Function - Block of Code that performs task , can be invoked whenever needed.
// Examples
console.log("Hello");

"abc".toUpperCase();

[1,2,3].push(4,5,6);
// Function Definition(What work) and Call(Doing that Work).Logic which is repeated frequently we use Functions.
function myFunction(){
  console.log("Welcome to My College");
  console.log("We are learning JavaScript");
}
myFunction();
myFunction();
function parameter(msg){ //Parameter
  console.log(msg);
}
// msg*n - not a Number error.
parameter('I like JavaScript'); //Argument
function sum(a,b){
  console.log(a+b);
}
sum(3,4);
sum(5,6);
function sum2(x,y){
  // x,y - scope - local
  console.log("Before Return");
  return x+y;
  // console.log("After Return"); -  code after return is not executed.
}
let result = sum2(67,54);
console.log(result);

// Modern JS
// Arrow Functions - for less code
// Compact way of Writing a Function
const arrowSum = (a,b)=>{
  console.log(a+b);
};
console.log(arrowSum);
arrowSum(3,4);
let arrowMul = (a,b)=>{
  console.log(a*b);
}
arrowMul(6,7);
console.log(arrowMul);
arrowMul = 5;
console.log(arrowMul);
const printHello = ()=>{
  console.log("Hello");
}
printHello();
const Hello = ()=>console.log("Hello world");
Hello();
function Vowels(str){
  let count = 0;
  for(let c of str){
    if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
      count++;
  }
  return count;
}
let ans = Vowels("Hello");
console.log(ans);

const countVowels = (str)=>{
  let count = 0;
  for(let c of str){
    if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
      count++;
  }
  return count;
}
console.log(countVowels("World"));

// forEach Loop - CallBack functions (Functions passed as Parameters)
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
  console.log(val);
}); //each value at each index.
arr.forEach(()=>console.log())
// Call back functions - 3 parameters
//  value , position , Array itself
let arr1 = ["pune","mumbai","delhi"];
arr1.forEach((val,idx,arr1)=>{
  console.log(val,idx,arr1);
});
// Higher Order functions - take other function as parameter or return function.

arr3 = [1,2,3,4,5,6,7,8,9,10];
arr3.forEach((val)=>{
  console.log(val*val);
});
let calCube = (num)=>{
  console.log(num*num*num);
}
arr3.forEach(calCube);
// Array Methods
// forEach - to print each value
// Map - similar to forEach with difference is map returns new Array from CallBack function.Create new Array from returned Values of callback function.
let nums = [234,345,456,74];
nums.map((val)=>{
  console.log(val);
});
let newArr = nums.map((val)=>{
  return val*2;
})
console.log(newArr);
// Filter - Based on Condition filter some values
let newArr2 = nums.filter((val)=>{
  if(val%2===0)
    return val>3;
});
console.log(newArr2);
// Reduce - Single value returned
let MySum = nums.reduce((res,val)=>{
  return res+val;
});
console.log(MySum);
let greater = nums.reduce((res,val)=>{
  return res>val?res:val;
});
console.log(greater);

let studentMarks = [89,98,99,97,87];
let toppers = studentMarks.filter((val)=>{
return val>=90;
});
console.log(toppers);
let n = prompt('Enter a Number : ');
let Arr = [];
for(let i=1;i<=n;i++){
Arr[i-1] = i;
}
console.log(Arr);
let SUM = Arr.reduce((prev,curr)=>{
  return curr+prev;
});
let FACTORIAL = Arr.reduce((prev,curr)=>{
  return curr*prev;
});
console.log(SUM);
console.log(FACTORIAL);