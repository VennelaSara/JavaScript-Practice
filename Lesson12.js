                      //  Callbacks , Promises & Async Await.
console.log("One");
console.log("Two");
console.log("Three");
// Above is Synchronous Programming means sequence is maintained.

// Independent data - can use Asynchronous Programming.
function hello(){
  console.log("Hello");
}
console.log("One");
setTimeout(hello,2000);
setTimeout(()=>{
  console.log("Hello World!");
},4000);
console.log("Two");
console.log("Three");
// CallBack - pass without paranthesis.
function sum(a,b){
  console.log(a+b);
}
function calculator(a,b,sumCallBack){
  sumCallBack(a,b);
}
calculator(1,2,sum);

// Promise is eventual completion of task
let promise = new Promise((resolve,reject)=>{
  console.log("I am Promise");
  resolve("Fullfilled");
});
const getPromise = ()=>{
  return new Promise((resolve,reject)=>{
    console.log("I am a Promise");
    resolve("Sucess");
  });
};
let Mypromise = getPromise();
promise.then((res)=>{
  console.log("Promise Fullfilled",res);
});
promise.catch((err)=>{
  console.log("Error Occurred",err);
});
const URL = "https://www.youtube.com/watch?v=CyGodpqcid4";
const Urlpromise = fetch(URL);
console.log(Urlpromise);
const getFacts = async()=>{
  console.log("Getting data......");
  let promise = await fetch(URL);
  console.log(promise);
}