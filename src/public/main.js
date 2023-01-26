const quiz = [
  {
    question: "France Capital?",
    choices: ["Paris", "Rome", "SF", "Delhi"],
    correctAnswer: 0
    },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "BN6111", "Sun"],
    correctAnswer: 1
    },
  {
    question: "Which of the following is not a programming language?",
    choices: ["Java", "Python", "HTML5", "C++"],
    correctAnswer: 2
    }
];

// variables to keep track of quiz progress
var currentQuestion = 0;
var score = 0;

// function to display the current question
function displayQuestion() {
  var question = quiz[currentQuestion].question;
  var choices = quiz[currentQuestion].choices;

  document.getElementById("question").innerHTML = question;

  for (var i = 0; i < choices.length; i++) {
    document.getElementById("choice" + i).innerHTML = choices[i];
  }
}

// function to handle user's answer
function checkAnswer(userChoice) {
  if (userChoice == quiz[currentQuestion].correctAnswer) {
    score++;
  }

  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    // display final score
    document.getElementById("quiz").innerHTML = "Quiz Over! Your score is gg! " + score + " out of " + quiz.length;
  }
}

// start the quiz when the page loads
window.onload = displayQuestion;
