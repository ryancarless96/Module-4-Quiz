var startButton = document.querySelector("#startbtn");
var resetButton = document.querySelector(".back-btn");
var score = document.querySelector(".score");
var questions;
var currentQuestionindex = 0;

var timerElement = document.querySelector(".timer-count");
var passQuiz = document.querySelector(".pass");
var failQuiz = document.querySelector(".fail");

var score = 0;
var passCounter = 0;
var failCounter = 0;
var timer;
var timerCount;


var answers = ["cd", "touch index.html", "ls", "git commit -m", "git clone", "git pull origin main", "mkdir", "git add -A"];

function selectAnswer() {
  questions = [
    {
      question1: "What adds the file to be commited?",
      answers: {
        "touch index.html":"incorrect!", 
        "ls": "incorrect!",
        "mkdir":"incorrect!",
        "git add-A": "correct!",
      },
    },
    {
      question2: "How do you create a new folder?",
      answers: {
        "ls": "incorrect!", 
        "mkdir": "incorrect!",
        "git clone": "incorrect!",
        "cd": "correct!",
      },
    },
    {
      question3: "What do we use to clone the repository?",
      answers: {
        "cd": "incorrect!",
        "touch index.html": "incorrect!",
        "ls":"incorrect!",
        "git clone": "correct!",
      },
    },
    {
      question4: "How do you get the latest from the repo?",
      answers: {
        "git commit -m": "incorrect!",
        "ls": "incorrect!",
        "git status": "incorrect!",
        "git pull origin main": "correct!",
      },
    }, 
  ];
return questions;
  
}

function refertoQuestions() {
  answers = ["cd", "touch index.html", "ls", "git commit -m", "git clone", "git pull origin main", "mkdir", "git add -A"]
}


function init() {
  getPasses();
  getFails();
}

function startQuiz() {

  console.log('Begin quiz')
  timerCount = 60000;
  startButton.disabled = true;
  startTimer()
  displayQuiz();
}
function displayQuiz() {
  var currentQuestion = questions[currentQuestionindex];
  console.log(currentQuestion);
}

// var quiz = [
//   [1, "What adds the file to be commited?", "git add -A"],
//   [2, "How do you create a new folder?", "cd"],
//   [3, "What do we use to clone the repository?", "git clone"],
//   [4, "How do you get the latest from the repo?", "git pull origin main"]
// ];


function passQuiz() {
  wordBlank.textContent = "You Passed!" ;
  passCounter++
  startButton.disabled =
    setPasses()
}

function failQuiz() {
  wordBlank.textContent = "You Failed!" ;
  failCounter++
  startButton.disabled =
    setFails()
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isPass && timerCount > 0) {
        clearInterval(timer);
        passQuiz()
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      failQuiz();
    }
  })
}

function score() {
  chosenScore = scores[Math.floor(Math.random() * score.length)];
  numbersInChosenScore = chosenScore.split("");
  numScores = numbersInChosenScore.length;
  highScores = []

  for (var i = 0; i < numScores; i++) {
    highScores.push("");
  }
  highScores.textContent = highScores.join("")
}


function setPasses() {
  pass.textContent = passCounter;
  localStorage.setItem("passCount", passCounter);
}

function setFails() {
  fail.textContent = failCounter;
  localStorage.setItem("failCount", failCounter);
}

function getPasses() {
  var storedPasses = localStorage.getItem("passCount");
  console.log(storedPasses);
  if (storedPasses === null) {
    passCounter = 0;
  } else {
    passCounter = storedPasses;
  }
  passQuiz.textContent = passCounter;
}
function getFails() {
  var storedFails = localStorage.get("failCount");
  if (storedFails === null) {
    failCounter = 0;
  } else {
    failCounter = storedFails;
  }
  fail.textContent = failCounter;
}

startbtn.onclick=startQuiz;

//init();


function resetQuiz() {
  passCounter = 0;
  failCounter = 0;

  setPasses()
  setFails()

  resetButton.addEventListener("click", resetQuiz);
}
