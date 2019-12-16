confirm("Would you like to start the quiz?"); {

    var qNum = 0;
    var correct = 0;
    var test, test_status, question, choice, choices, chA, chB, chC;

    // The array of questions for our quiz game.
    var questions = [
        { q: "The sky is blue.", a: "t" },
        { q: "There are 365 days in a year.", a: "t" },
        { q: "There are 42 ounces in a pound.", a: "f" },
        { q: "The Declaration of Independence was created in 1745.", a: "f" },
        { q: "Bananas are vegetables.", a: "f" }
    ];

    // create an array with 10 question objects.  See 33-QuestionGame (Javascript)
    var questions = [
        { q: "Inside which HTML element do we put the JavaScript?", chA: "script", chB: "javascript", chC: "js" a: "a" },
        { q: "Where is the correct place to insert a JavaScript?", chA: "The head section", chB: "Both the head section and the body section", chC: "The body section" a: "b" }];

            // We start the game with a score of 0.
    var score = 0;

    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
      // Display current question to user and ask for the users choice.  They will click a button that triggers answer comparison.
      var answer = confirm(questions[i].q);

      // When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
    var element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      todos.splice(index, 1);
  



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


    window.addEventListener("load", renderQuestion, false);

};
