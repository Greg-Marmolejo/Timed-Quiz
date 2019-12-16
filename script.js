confirm("Would you like to start the quiz?"); {

  window.addEventListener("load", renderQuestion, false);

console.log("Hello World")

//records the time the quiz starts
var start = Date.now();
var highscore = 0;
var qNum = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC;

// create an array with 10 question objects.  See 33-QuestionGame (Javascript)
var questions = [
  ["Inside which HTML element do we put the JavaScript?", "script", "javascript", "js", "A"],
  ["Where is the correct place to insert a JavaScript??", "The head section", "Both the head section and the body section", "The body section", "C"],
  // ["What is the correct syntax for referring to an external script called 'xxx.js'?", "script src='xxx.js'", "script href='xxx.js'", "script name ='xxx.js'", "A"],
  // ["How do you write 'Hello World' in an alert box?", "alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "A"],
  // ["How do you create a function in JavaScript?", "function:myFunction()", "function = myFunction()", "function myFunction()", "C"],
  // ["How do you call a function named 'myFunction'?", "myFunction()", "call myFunction()", "call function myFunction()", "A"],
  // ["How to write an IF statement in JavaScript?", "if i = 5 then", "if (i==5)", "if i = 5 ", "B"],
  // ["What is the correct way to write a JavaScript array?", "var colors ='red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = 1:'red', 2:'green', 3:'blue'", "B"],
  // ["How do you round the number 7.25, to the nearest integer?", "Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)", "B"],
  // ["How do you find the number with the highest value of x and y?", "top(x,y)", "Math.max(x,y)", "ceil(x,y)", "B"]
];

function get(x) {
  return document.getElementById(x);
}

function renderQuestion() {
  test = get("test");
  if (qNum >= questions.length) {
    test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question " + (qNum + 1) + " of " + questions.length;
  question = questions[qNum][0];
  chA = questions[qNum][1];
  chB = questions[qNum][2];
  chC = questions[qNum][3];
  test.innerHTML = "<h3>" + question + "</h3>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if (choice == questions[qNum][4]) {
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  qNum++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
function gameOver(){
//records the time the quiz ends
var end = Date.now();
var elapsed = end - start; // elapsed time in milliseconds
console.log(elapsed);
}

function highscore (){
  // Calculates the score from number correct and time elapsed.
var score = (correct * 1000 - elapsed);

// Sets the score to localstorage.
localStorage.setItem("score", score);

// Compares the highscore to the score in this game.
if (highscore !== null) {
  if (score > highscore) {
    localStorage.setItem("highscore", score);
  }
}
else {
  localStorage.setItem("highscore", score);
};
}
}