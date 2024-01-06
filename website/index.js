/* 1) JavaScript Basics:
   // Print to console.
   console.log(`Hello`);
   console.log(`I like pizza!`);
   // Backticks `` are to create a template literal.
   window.alert(`This is an alert!`);
   window.alert(`I like pizza`);
   // Use to change text content of an HTML element.
   document.getElementById("myH1").textContent = `Hello`;
   document.getElementById("myP").textContent = `I like pizza!`;
*/

/* 2) Variables:
   // declaration
   let x;

   // assignment
   x = 100;

   // declaration + assignment
   let age = 21;

   // return type at console
    console.log(typeof age);

   // print/return to console
   console.log(`You are ${age} years old.`);
*/

/* 3) Accepting user input:
   // Window Prompt
   let username;
   
   username = window.prompt("What's your username?");

   console.log(username);

   // HTML text-box
   <h1 id="myH1"></h1>
   <label>username: </label>
   <input id="myText"><br><br>
   <button id="mySubmit">submit</button>

   let username;
   document.getElementById("mySubmit").onClick = function(){
      username = document.getElementById("myText").value;
      document.getElementById("myH1").textContent = `Hello ${username}`;
   }
*/

/* 4) Type Conversion:
let age = window.prompt("How old are you?");
age = Number(age);
age++;
console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

/* 5) Constants:
// Useful to prevent the changing of any variables that MUST be a concrete value.
// DON'T use camelCase with const if they are a number or boolean, make the name fully Uppercase.
const PI = 3.1415926;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
   radius = document.getElementById("myText").value;
   radius = Number(radius);
   circumference = 2 * PI * radius;
   document.getElementById("myH3").textContent = circumference + "cm";
}

<h1 id="myH1">Enter the radius of a circle:</h1>
<label>radius:</label>
<input type="text" id="myText"><br><br>
<button id="mySubmit">submit</button>
<h3 id="myH3"></h3>
*/