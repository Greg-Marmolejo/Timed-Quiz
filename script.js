var qNum = 0;
var test, test_status, question, choice, choices, chA, chB, chC;
var score = 25;
var correct = 0;
var pointsDeducted = 0
var secondsRemaining = 5;
var interval;
var highscore = localStorage.getItem("highscore");

// create an array with 5 question objects.  5 Bonus Questions if anybody really wants
var questions = [
  ["Inside which HTML element do we put the JavaScript?", "script", "javascript", "js", "A"],
  ["Where is the correct place to insert a JavaScript??", "The head section", "Both the head section and the body section", "The body section", "B"],
  ["What is the correct syntax for referring to an external script called 'xxx.js'?", "script src='xxx.js'", "script href='xxx.js'", "script name ='xxx.js'", "A"],
  ["How do you write 'Hello World' in an alert box?", "alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "A"],
  ["How do you create a function in JavaScript?", "function:myFunction()", "function = myFunction()", "function myFunction()", "C"],
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
    // stops rest of renderQuestion function running when test is completed
    recordScores();
    test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct.</h2>";
    test.innerHTML = "<h2>You scored " + score + " out of 50.  The high score is " + highscore + ".</h2>";
    get("test_status").innerHTML = "Test completed";
    return;
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
  startTimer();
}

function startTimer() {
  secondsRemaining = 5;
  interval = setInterval(decrementTime, 1000);
}

function decrementTime() {
  //alert if no time left and clear interval
  secondsRemaining--;
  // renderTime();
  if (secondsRemaining === 0) {
    stopTimer();
    alert("Time's Up.  5 points deducted.  Next question.");
    checkAnswer();
  }
}

function stopTimer() {
  // secondsRemaining = 0;
  clearInterval(interval)
}

function checkAnswer() {
  stopTimer();
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
    score = score + 5
  }

  // Updates the score
  pointsDeducted = (5 - secondsRemaining);
  score = score - pointsDeducted
  console.log("Points Deducted: " + pointsDeducted)

  // increments the question number
  qNum++;

  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}

function recordScores() {
  // Compares the highscore to the number answered correct in this game.
  // if(highscore !== null){
  if (score > highscore) {
    highscore = score;
    localStorage.setItem("highscore", score);
    localStorage.setItem("correct", correct);
  }
}

renderQuestion();