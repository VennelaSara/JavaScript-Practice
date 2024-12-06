              // Arrays
              // Mutable
// Collection of items
// Same type information in Linear Way.
// Only one name ab=nd based on position we find Value required.
let heroes = ["IronMan","Captain America","Black Widow","Thor","Hauckey","Hulk","SpiderMan","AntMan","Ash"];
console.log(heroes);
let marks = [45,67,78,76,100];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks)); //Object with keys as indices.
console.log(marks[0]);
marks[1] = 100;
console.log(marks);
// Looping
// Iterables(Iterate on Collection) -  on objects,strings,Arrays
for(let index=0;index<heroes.length;index++){
  console.log(heroes[index]);
}
let cities = ["Delhi","Hyderabad","Gurgaon","Banglore"];
for(let city of cities){
  console.log(city.toUpperCase());
}

// Practice Question

let classMarks = [85,97,44,37,76,60];
let sum = 0;
for(let val of classMarks){
  sum+=val;
}
let average = sum/marks.length;
console.log(`Average marks of class =  ${average}`);

let prices = [250,645,300,900,50];
for(let i;i<=prices;i++){
  offer = prices[i]/10;
  prices[i] = prices[i]-offer;
}
let p=0
for(let val of prices){
  offer = val/10;
  prices[p] = prices[p]-offer;
  p++;
}
// Array methods - change array and some don't change array.
let foodItems = ["Potato","Apple","Litchi","Tomato"];
console.log(foodItems);
foodItems.push("Chips","Burger","Paneer");
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log(deletedItem);
console.log(foodItems.toString()); //New String
console.log(foodItems);
// Original remains intact.
let marvelHeroes = ["Thor","Spiderman","IronMan"];
let dcHeroes = ["SuperMan","BatMan"];
let IndianHeroes = ["Shaktiman","Krish"];
let myHeroes = marvelHeroes.concat(dcHeroes,IndianHeroes);
console.log(myHeroes);
// unshift - add at start
marvelHeroes.unshift("AntMan");
// shift - delete at start
console.log(marvelHeroes);
marvelHeroes.shift();
console.log(marvelHeroes);
marvelHeroes.unshift("AntMan");

// Slice - no change in Original Array
// Returns piece of Array and last index not inclusive
console.log(marvelHeroes.slize(1,4));
console.log(marvelHeroes.slize());
// Splice - Change Original Array(add,remove,replce)
// (index,no.of elements from that index to be deleted,adding elements at that positions).
let arr = [1,2,3,4,5,6,7];
console.log(arr);
arr.splice(2,2,101,102);
console.log(arr);
// Add
arr.splice(2,0,103);
console.log(arr);
// Delete
arr.splice(3,1);
console.log(arr);
// Replace
arr.splice(3,1,101);
console.log(arr);
console.log(arr.splice(4)); //from this index deletes and returns
console.log(arr);

// Practice Questions

let companies = ["Bloomberg","MicroSoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.slize(2,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);


