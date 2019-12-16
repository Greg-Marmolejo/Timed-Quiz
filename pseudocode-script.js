// create an array with 10 question objects. See 33-QuestionGame (Javascript)
//Each object in the array should be structured as follows: 
        //      { q: "QUESTION", a: "ANSWER" }
        var questions = [
            {q: "Inside which HTML element do we put the JavaScript?", chA:"script" chB:"javascript" chC:"js" a: "A" },
            {q: "There are 365 days in a year.", a: "t" },
            {q: "There are 42 ounces in a pound.", a: "f" },
            {q: "The Declaration of Independence was created in 1745.", a: "f" },
            {q: "Bananas are vegetables.", a: "f" }
        ];
   // We start the game with a score of 0.
   var score = 0;

   // Loop over every question object
   for (var i = 0; i < questions.length; i++) {
     // Display current question to user and ask OK/Cancel
     var answer = confirm(questions[i].q);

     // Compare answers
     if ((answer === true && questions[i].a === "t") ||
       (answer === false && questions[i].a === "f")) {
       // Increase score
       score++;
       alert("Correct!");
     }
     else {
       alert("Wrong!");
     }
   }

   // Show total at end
   alert("You got " + score + "/" + questions.length);
   
// Function to show question.  Uordered list similar to 18-Ins_Event_Delegation for multiple choice.
   var listEl = document.querySelector("#grocery-list");
   var shoppingCartEl = document.querySelector("#shopping-cart");
   var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];
   
   listEl.addEventListener("click", function(event) {
     event.preventDefault();
     if(event.target.matches("button")) {
       var item = document.createElement("div");
       item.textContent = groceries[event.target.parentElement.id];
       shoppingCartEl.append(item);
     }
   });
// This should start the timer.

// Function to compare answer to correct answer (triggered by click event)

// Function to keep score (accounting for speed of answers as well as correctness)

// Function for local storage.  See 20- Ins_Local-Storage-Counter.