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