              //Loops and Strings

              // Loops to execute a Piece of code again and again
              // for loop - initialize(Only once),condition check and Updation.Used when we know no.of iterations.
              for(let i=1;i<=5;i++){
                console.log("My College");
              }
              // Calculate sum
              let sum = 0;
              for(let i=1;i<=5;i++){
                sum+=i;
              }
              console.log(sum);
              // While loop - Used when we don't know no.of iterations mostly.
              let j=1;
              while(j<=5){
                console.log("My College");
                j++;
              }
              // DoWhile Loop - Atleast once executed irrespective of condition later depending on condition execute.
              let k=20;
              do{
                console.log("My College");
              }while(k<=10);
              // for-of Loop - iterator for strings,arrays
              let str = "College";
              let size = 0;
              for(let i of str){
                console.log(i);
                size++;
              }
              console.log("String size : ",size);
              // for-in loop - for objects
              // Returns keys of Object.
              let student = {
                name:"Rahul Kumar",
                age:20,
                cgpa:10.0
              };
              for(let key in student){
                console.log("Key : ",key," Value : ",student[key]);
              }
// Print all Numbers
              for(let i=0;i<=100;i++){
                console.log(i);
              }
              // Print Even Numbers
              for(let i=0;i<=100;i++){
                if(i%2===0)
                  console.log(i);
              }
              // Print Odd Numbers
              for(let i=0;i<=100;i++){
                if(i%2!==0)
                  console.log(i);
              }
              // Game - Guess the Number
              let gameNumber = 25;
              let guess = prompt("Guess the game Number");
              while(gameNumber!=guess){
                guess = prompt("You entered wrong number , Guess again : ");
              }
              // Since prompt gives string so don't use '!==' and use '!='.
              console.log("Congragulations! , You guessed the right Number");

              // Strings - Squence of Characters used to represent text
              // Has Inbuilt Properties(Variables) and functions called Methods.
              // 0-based Indexing.
              let str1 = "College";
              let str2 = 'College';
              console.log(str1);
              console.log(str2);
              console.log(str1.length);
              console.log(str1[4]);
              // Template literals - A way to have embedded expressions in Strings.
              // String Interpolation - To create strings by doing substitution of Placeholders.
              let sentence = `This is a Template Literal`;
              console.log(sentence);
              console.log(typeof(sentence));
              let obj = {
                item:"Pen",
                price:10
              }
              console.log("The cost of ",obj.item," is ",obj.price," rupees");
              console.log(`The cost of ${obj.item} is ${obj.price} rupees`);
              // In template number becomes part of string.
// Escape Characters
console.log("My \n College   ");
console.log("My\tCollege");
let str3 = "  My\tCollege  ";
console.log(str3.length); //2 escape characters treated as One.
// String methods - Never change Original String create a new String with new Value.
// Strings are Immutable
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim()); //Removes whitespaces at both ends
console.log(str3);
// But if we store back in Same Variable then ,
str3 = str3.toUpperCase();
console.log(str3);
console.log(str3.slice(0,3)); //Ending value not inclusive.
console.log(str3.concat(str1));
console.log("Hello , "+str3+str2);
console.log(str3.replace("My","Apna"));
console.log(str3.charAt(4));
let str5 = "hellolo"
console.log(str5.replace("lo","p")); //Replace only First Occurrence.
console.log(str5.replaceAll("lo","p"));
// Replace All Occurrences.
// str[0] = "Z" - gives error since string is immutable can't manipulate the original string.

// Practice Questions

let userFullname = prompt("Enter your Full Name");
// Make sure the name doesnot have spaces in between just for formattting.
console.log(`@${userFullname}${userFullName.length}`);





